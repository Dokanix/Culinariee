import styled from 'styled-components';
import Icon from './Icon';
import RecipeActions from './RecipeActions';
import Stars from './Stars';

const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  padding: 1.6em;
  border-radius: 0.8rem;
  box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 10%);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
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

const StyledTime = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.6rem;
  color: rgb(var(--color-lightgray));
  font-weight: bold;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <StyledDiv key={recipe.id}>
      <RecipeActions recipe={recipe} />

      <StyledFigure>
        <StyledImg src={recipe.img} alt={recipe.name} />
      </StyledFigure>

      <StyledHeading>{recipe.name}</StyledHeading>
      <StyledInfo>
        <StyledTime>
          <Icon size='2rem' margin='0.8rem'>
            schedule
          </Icon>
          {recipe.time} minut
        </StyledTime>
        <Stars count={recipe.rating} />
      </StyledInfo>
    </StyledDiv>
  );
};

export default RecipeCard;
