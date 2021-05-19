import styled from 'styled-components';
import Navigation from './components/Navigation';
import RecipePanel from './components/RecipePanel';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

function App() {
  return (
    <StyledDiv>
      <Navigation />
      <RecipePanel />
    </StyledDiv>
  );
}

export default App;
