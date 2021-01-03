import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DarkTheme}>
      <Story />
    </ThemeProvider>
  ),
];
