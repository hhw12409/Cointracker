import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme, ThemeType } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}
  body {
    font-family:'Source Sans Pro', sans-serif;
    background-color : #2f3640;
    color: #f5f6fa;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  /* other styles */
`;

export default GlobalStyle;
