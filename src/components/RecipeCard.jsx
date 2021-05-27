import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import RecipeActions from './RecipeActions';
import RecipeTime from './RecipeTime';
import Stars from './Stars';

const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  padding: 1.6em;
  border-radius: 0.8rem;
  box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 10%);
  cursor: pointer;
  transition: transform 0.2s;
  animation: 0.2s ease-out 1 pop;

  @keyframes pop {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    width: 10rem;
    height: 200%;
    top: 0;
    right: 0;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.2) 50%,
      transparent
    );
    transform: translateY(-50%) rotate(-60deg);
    transition: all 0.2s;
    opacity: 1;
  }

  &:hover::after {
    transform: translateY(-40%) rotate(-60deg);
    opacity: 1;
  }
`;

const StyledFigure = styled.div`
  margin-bottom: 1.6rem;
`;

const StyledHeading = styled.h2`
  font-size: var(--size-big);
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 0.8rem;
  box-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 15%);
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RecipeCard = ({ recipe }) => {
  const history = useHistory();

  return (
    <StyledDiv
      onClick={() => history.push(`/recipes/${recipe.id}`)}
      key={recipe.id}
    >
      <RecipeActions recipe={recipe} />

      <StyledFigure>
        <StyledImg src={recipe.img} alt={recipe.name} />
      </StyledFigure>

      <StyledHeading>{recipe.name}</StyledHeading>
      <StyledInfo>
        <RecipeTime time={recipe.time} />
        <Stars count={recipe.rating} />
      </StyledInfo>
    </StyledDiv>
  );
};

export default RecipeCard;
