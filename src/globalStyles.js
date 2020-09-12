import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, html {
    margin: 0;
    box-sizing: border-box;
    cursor: none;

  }
  body {
    background: black;
    color: white;
    mix-blend-mode: difference;
  }
`;

export default GlobalStyles;