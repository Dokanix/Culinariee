import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeThumbnail from './RecipeThumbnail';
import RecipeIngredients from './RecipeIngredients';
import RecipeSteps from './RecipeSteps';

const StyledDiv = styled.div`
  width: 80rem;
  max-width: 90vw;
  background-color: rgb(var(--color-background));
  border-radius: 0.8rem;
  margin: auto;
  padding: 2.4rem;
  box-shadow: 0.3rem 0.3rem 3rem rgba(0, 0, 0, 15%);
  transition: transform 0.2s;
  animation: 0.2s ease-out 1 slide;

  @keyframes slide {
    0% {
      transform: translateY(-15rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const StyledHeading = styled.h3`
  font-size: 2.4rem;
  margin: 2.4rem;
  margin-bottom: 1.6rem;
  color: rgb(var(--color-graytext));
`;

const Modal = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const recipe = await axios.get(`http://localhost:3001/recipes/${id}`);
      setRecipe(recipe.data);
      console.log(recipe.data);
    };

    fetchData();
  }, [id]);

  if (!recipe) {
    return null;
  }

  return (
    <StyledDiv onClick={(e) => e.stopPropagation()}>
      <RecipeThumbnail recipe={recipe} />
      <StyledHeading>Składniki</StyledHeading>
      <RecipeIngredients ingredients={recipe.ingredients} />
      <StyledHeading>Przepis</StyledHeading>
      <RecipeSteps steps={recipe.steps} />
    </StyledDiv>
  );
};

export default Modal;
