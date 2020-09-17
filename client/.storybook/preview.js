import GlobalStyles from "../src/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};
const appDecorator = (Story, context) => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Story {...context} />
      </Router>
    </>
  );
};
export const decorators = [appDecorator];
