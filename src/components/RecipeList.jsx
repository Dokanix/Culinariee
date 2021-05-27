import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { initializeRecipes } from '../redux/recipeSlice';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';
import RecipeAdder from './RecipeAdder';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 4.8rem;
  align-items: center;
  justify-items: center;
`;

const filterRecipes = (activeCategory) => {
  switch (activeCategory) {
    case 'Wszystkie':
      return ({ recipes }) => recipes.all;
    case 'Ulubione':
      return ({ recipes }) => recipes.all.filter((recipe) => recipe.favorite);
    case 'Ostatnie':
      return ({ recipes }) => recipes.all;
    case 'Najlepsze':
      return ({ recipes }) =>
        [...recipes.all].sort((a, b) => b.rating - a.rating);
    default:
      return ({ recipes }) =>
        recipes.all.filter((recipe) =>
          recipe.categories.includes(activeCategory)
        );
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
      <RecipeAdder />
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </StyledDiv>
  );
};

export default RecipeList;
