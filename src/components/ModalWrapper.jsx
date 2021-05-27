import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px) brightness(0.8);
  transition: all 0.2s;
  display: flex;
`;

const ModalWrapper = ({ children }) => {
  const history = useHistory();

  return ReactDOM.createPortal(
    <StyledDiv onClick={() => history.push('/')}>{children}</StyledDiv>,
    document.querySelector('#modal')
  );
};

export default ModalWrapper;
