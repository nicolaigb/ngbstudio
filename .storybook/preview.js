import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../styles";
import { withNextRouter } from 'storybook-addon-next-router';

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#343740'
      },
      {
        name: 'light',
        value: '#FFFFFF'
      }
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DarkTheme}>
      <Story />
    </ThemeProvider>
  ),
  withNextRouter()
];
