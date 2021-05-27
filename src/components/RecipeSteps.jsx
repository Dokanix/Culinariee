import styled from 'styled-components';

const StyledOl = styled.ol`
  line-height: 1.6;
  font-weight: 600;
  font-size: var(--size-small);
  color: rgb(var(--color-graytext));
`;

const StyledCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;

  &:checked ~ span {
    text-decoration: line-through;
    color: rgb(var(--color-green));
  }
`;

const StyledSpan = styled.span`
  transition: all 0.1s;

  &:hover {
    opacity: 0.7;
  }
`;

const RecipeSteps = ({ steps }) => {
  return (
    <StyledOl>
      {steps.map((step) => (
        <li key={step}>
          <label>
            <StyledCheckbox />
            <StyledSpan>{step}</StyledSpan>
          </label>
        </li>
      ))}
    </StyledOl>
  );
};

export default RecipeSteps;
