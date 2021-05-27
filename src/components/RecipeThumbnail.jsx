import styled from 'styled-components';
import RecipeTime from './RecipeTime';
import Stars from './Stars';

const StyledContainer = styled.div`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 0.8rem;
  box-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 15%);
  background: linear-gradient(to top, black, transparent 30%),
    url(${(props) => props.img}) center center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.4rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyledHeading = styled.h2`
  color: rgb(var(--color-white));
  font-size: var(--size-huge);
`;

const RecipeThumbnail = ({ recipe }) => {
  return (
    <StyledContainer img={recipe.img}>
      <Stars count={recipe.rating} />
      <StyledDiv img={recipe.img}>
        <StyledHeading>{recipe.name}</StyledHeading>
        <RecipeTime big time={recipe.time} />
      </StyledDiv>
    </StyledContainer>
  );
};

export default RecipeThumbnail;
