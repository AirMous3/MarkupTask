import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { App } from '@/components/App';
import { theme } from '@/theme';

import { Global } from './GlobalStyles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
