import normalize from "normalize.css";
import React from "react";
import { CssBaseline } from "../src/utils";

const ThemeDecorator = (Story) => (
  <>
    <CssBaseline />
    <Story />
  </>
);

export const decorators = [ThemeDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
