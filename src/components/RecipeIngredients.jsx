import styled from 'styled-components';
import { useState } from 'react';

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding: 0;
  margin: 2.4rem;
  margin-top: 1.6rem;
  font-weight: 600;
  color: rgb(var(--color-graytext));
`;

const StyledCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;

  &:checked ~ span {
    background-color: rgb(var(--color-green));
  }
`;

const StyledSpan = styled.span`
  padding: 0.8rem 1.6rem;
  border-radius: 3.2rem;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 15%);
  line-height: 2.4;
  font-size: 1.6rem;
  transition: filter 0.2s;
  background-color: rgb(var(--color-background));

  &:hover {
    filter: brightness(0.95);
  }
`;

const RecipeIngredients = ({ ingredients }) => {
  return (
    <StyledUl>
      {ingredients.map(({ name, amount }) => (
        <li key={name}>
          <label>
            <StyledCheckbox />
            <StyledSpan>
              {name} {amount}
            </StyledSpan>
          </label>
        </li>
      ))}
    </StyledUl>
  );
};

export default RecipeIngredients;
