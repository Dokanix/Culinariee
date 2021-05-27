import styled from 'styled-components';
import Navigation from './components/Navigation';
import RecipePanel from './components/RecipePanel';
import { Switch, Route } from 'react-router-dom';
import ModalWrapper from './components/ModalWrapper';
import RecipeModal from './components/RecipeModal';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

function App() {
  return (
    <StyledDiv>
      <Navigation />
      <RecipePanel />
      <Switch>
        <Route path='/recipes/:id'>
          <ModalWrapper>
            <RecipeModal />
          </ModalWrapper>
        </Route>
      </Switch>
    </StyledDiv>
  );
}

export default App;
