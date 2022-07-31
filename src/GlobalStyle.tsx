import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

interface ITheme {
  textColor: string;
  bgColor: string;
  accentCoor: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  ${reset}
  body {
    font-family:'Source Sans Pro', sans-serif;
    background-color : ${(props) => props.theme.bgColor}
    color: ${(props) => props.theme.textColor};
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
