import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/categorySlice';
import Icon from './Icon';

const StyledDiv = styled.div`
  position: relative;
  color: rgb(var(--color-brown));
  background-color: ${(props) =>
    props.selected ? 'rgb(var(--color-background))' : 'transparent'};
  padding: 0.8rem 4rem;
  padding-right: 6.4rem;
  font-size: var(--size-medium);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(var(--color-background), 50%);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2rem;
    background-color: rgb(var(--color-green));
    left: 0;
    box-shadow: 0.1rem 0.3rem 0.8rem rgba(var(--color-green), 30%);
    transform: translateX(${({ selected }) => (selected ? '' : '-100%')});
    transition: all 0.2s;
  }
`;

const Category = ({ icon, children }) => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.category.active);
  const isSelected = activeCategory === children;

  return (
    <StyledDiv
      selected={isSelected}
      icon={icon}
      onClick={() => dispatch(setCategory(children))}
    >
      <Icon margin='1.6rem'>{icon}</Icon>
      {children}
    </StyledDiv>
  );
};

export default Category;
