import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { initializeRecipes } from '../redux/recipeSlice';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 4.8rem;
`;

const filterRecipes = (activeCategory) => {
  switch (activeCategory) {
    case 'Wszystkie':
      return ({ recipes }) => recipes;
    case 'Ulubione':
      return ({ recipes }) => recipes.filter((recipe) => recipe.favorite);
    case 'Ostatnie':
      return ({ recipes }) => recipes;
    case 'Najlepsze':
      return ({ recipes }) => [...recipes].sort((a, b) => b.rating - a.rating);
    default:
      return ({ recipes }) =>
        recipes.filter((recipe) => recipe.categories.includes(activeCategory));
  }
};

const RecipeList = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(({ category }) => category.active);
  const recipes = useSelector(filterRecipes(activeCategory));

  useEffect(() => {
    const fetchData = async () => {
      const recipes = await axios.get('http://localhost:3001/recipes');
      dispatch(initializeRecipes(recipes.data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <StyledDiv>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </StyledDiv>
  );
};

export default RecipeList;
