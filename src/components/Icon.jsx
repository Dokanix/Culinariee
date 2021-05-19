import styled from 'styled-components';

const StyledSpan = styled.span`
  color: ${(props) => props.color || 'rgba(var(--color-primary-dark), 70%)'};
  margin-right: ${(props) => props.margin || '0'};
  font-size: ${(props) => props.size || 'var(--size-medium)'};
  font-weight: bold;
`;

const Icon = ({ children, ...rest }) => (
  <StyledSpan {...rest} className='material-icons'>
    {children}
  </StyledSpan>
);

export default Icon;
