import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  textColor: "#2f3640",
  bgColor: "#f5f6fa",
  accentColor: "#9c88ff",
};

export type ThemeType = {
  theme: typeof theme;
};
