import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { Global } from "./GlobalComponent";

const theme = {
  colors: {
    primary: "#215EE9",
    secondary: "#7D8790",
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
