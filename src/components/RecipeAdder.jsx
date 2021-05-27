import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const StyledContainer = styled.div`
  border-radius: 0.8rem;
  border: 0.2rem dashed rgb(var(--color-whitegray));
  background-color: rgb(var(--color-background));
  font-size: var(--size-medium);
  color: rgb(var(--color-lightgray));
  width: 100%;
  height: 100%;
  padding: 1.6rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
    transform: translate;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
`;

const StyledDecorator = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border: 2px dashed rgb(var(--color-whitegray));
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 1.6rem;
  padding-top: 3.2rem;
`;

const RecipeAdder = () => {
  return (
    <StyledContainer>
      <StyledLink to='/add'>
        <StyledDecorator>
          <Icon color='rgb(var(--color-whitegray))' size='6.4rem'>
            image
          </Icon>
        </StyledDecorator>
        <StyledDiv>Dodaj Przepis</StyledDiv>
      </StyledLink>
    </StyledContainer>
  );
};

export default RecipeAdder;
