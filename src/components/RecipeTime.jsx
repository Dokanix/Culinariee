import styled from 'styled-components';
import Icon from './Icon';

const StyledTime = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${(props) => (props.big ? '3.6rem' : '1.6rem')};
  color: ${(props) =>
    props.big ? 'rgb(var(--color-white))' : 'rgb(var(--color-lightgray))'};
  font-weight: bold;
`;

const RecipeTime = ({ time, big }) => {
  return (
    <StyledTime big={big}>
      <Icon size={big ? '4rem' : '2rem'} margin='0.8rem'>
        schedule
      </Icon>
      {time}
      {big ? "'" : ' minut'}
    </StyledTime>
  );
};

export default RecipeTime;
