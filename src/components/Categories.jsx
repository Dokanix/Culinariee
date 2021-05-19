import styled from 'styled-components';
import Category from './Category';

const StyledDiv = styled.div`
  margin-bottom: 3.2rem;
`;

const Categories = ({ categories }) => {
  return (
    <StyledDiv>
      {categories.map((category) => (
        <Category key={category.name} icon={category.icon}>
          {category.name}
        </Category>
      ))}
    </StyledDiv>
  );
};

export default Categories;
