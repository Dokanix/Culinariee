import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/recipeSlice';
import Icon from './Icon';

const StyledDiv = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: all 0.2s;

  *:hover > & {
    opacity: 1;
  }
`;

const StyledAction = styled.button`
  padding: 1.2rem;
  background-color: white;
  border-radius: 2.4rem;
  border: 2px solid rgb(var(--color-whitegray));
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
  transition: all 0.2s;
  cursor: pointer;
  z-index: 1;

  :hover {
    transform: scale(1.15);
  }
`;

const RecipeActions = ({ recipe }) => {
  const dispatch = useDispatch();

  return (
    <StyledDiv>
      <StyledAction onClick={() => dispatch(toggleFavorite(recipe.id))}>
        <Icon color='rgb(var(--color-red))'>
          {recipe.favorite ? 'favorite' : 'favorite_border'}
        </Icon>
      </StyledAction>
      <StyledAction>
        <Icon color='rgb(var(--color-gray))'>share</Icon>
      </StyledAction>
      <StyledAction>
        <Icon color='rgb(var(--color-gray))'>print</Icon>
      </StyledAction>
    </StyledDiv>
  );
};

export default RecipeActions;
