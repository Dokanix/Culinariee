import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import fonts from './fonts';
import sizes from './sizes';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    
    ${sizes}
    ${fonts}
    ${colors}

    font-family: var(--font);
  }

  body {
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
