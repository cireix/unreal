import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import vw from './vw';

import './fonts.css';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0;
    color: ${theme.color.white};
    background: rgb(14, 17, 40);
  }

  h1 {
    font-family: ${theme.font.family};
    ${vw([['font-size', 72, 48, 36]])}
    font-weight: normal;
    letter-spacing: -1px;
  }

  h2 {
    font-family: ${theme.font.family};
    /* TODO: change this */
    ${vw([['font-size', 72, 48, 24]])}
    font-weight: normal;
    letter-spacing: -1px;
  }
`;
