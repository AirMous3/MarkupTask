import { createGlobalStyle } from 'styled-components';

import robotoBoldTtf from './assets/fonts/Roboto-Bold.ttf';
import robotoBoldWoff from './assets/fonts/Roboto-Bold.woff';
import robotoBoldWoff2 from './assets/fonts/Roboto-Bold.woff2';
import robotoRegularTtf from './assets/fonts/Roboto-Regular.ttf';
import robotoRegularWoff from './assets/fonts/Roboto-Regular.woff';
import robotoRegularWoff2 from './assets/fonts/Roboto-Regular.woff2';

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${robotoBoldWoff2}) format('woff2'),
    url(${robotoBoldWoff}) format('woff'),
    url(${robotoBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${robotoRegularWoff2}) format('woff2'),
    url(${robotoRegularWoff}) format('woff'),
    url(${robotoRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  body {
    margin: 0;
    font-family: Roboto, sans-serif, serif, monospace;
    background-color: ${(props) => props.theme.colors.background};
  }


  a {
    text-decoration: none;
  }

  ;
  li {
    list-style-type: none;
  }
`;
export default Global;
