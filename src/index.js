import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('assets/fonts/Roboto-Bold.woff2') format('woff2'),
    url('assets/fonts/Roboto-Bold.woff') format('woff'),
    url('assets/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('assets/fonts/Roboto-Regular.woff2') format('woff2'),
    url('assets/fonts/Roboto-Regular.woff') format('woff'),
    url('assets/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  body {
    margin: 0;
    font-family: Roboto,sans-serif, serif, monospace;
    background-color: #EBF1FF;
  }


  a {
    text-decoration: none;
  }

  ;
  li {
    list-style-type: none;
  }
`;

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById("root")
);
