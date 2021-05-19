import styled from 'styled-components';
import { useSelector } from 'react-redux';
import RecipeList from './RecipeList';

const StyledDiv = styled.div`
  padding: 4.8rem;
`;

const StyledHeading = styled.h1`
  font-size: var(--size-huge);
  margin-bottom: 4.8rem;
`;

const StyledSpan = styled.span`
  color: rgb(var(--color-brown));
`;

const RecipePanel = () => {
  const activeCategory = useSelector((state) => state.category.active);

  return (
    <StyledDiv>
      <StyledHeading>
        Twoje Przepisy - <StyledSpan>{activeCategory}</StyledSpan>
      </StyledHeading>
      <RecipeList />
    </StyledDiv>
  );
};

export default RecipePanel;
