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
    font-family: 'Cinzel', serif;
    overflow: hidden;
  }
`;

export default GlobalStyles;