import styled from 'styled-components';
import CommonCategories from './CommonCategories';
import CustomCategories from './CustomCategories';

const StyledNav = styled.nav`
  background-color: rgb(var(--color-primary));
  padding-top: 4.8rem;
  box-shadow: 0.1rem 0.2rem 0.8rem rgba(var(--color-primary), 100%);
  height: 100vh;
`;

const Navigation = () => {
  return (
    <StyledNav>
      <CommonCategories />
      <CustomCategories />
    </StyledNav>
  );
};

export default Navigation;
