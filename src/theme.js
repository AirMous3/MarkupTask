import { css } from 'styled-components';

const SCREEN_SIZES = {
  mobileM: 568,
  mobileL: 640,
  tablet: 768,
  laptop: 992,
  laptopM: 1140,
  laptopL: 1244,
};

const above = Object.keys(SCREEN_SIZES).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${SCREEN_SIZES[key]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const below = Object.keys(SCREEN_SIZES).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (max-width: ${SCREEN_SIZES[key]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const between = (a, b) => (...args) => css`
    @media (min-width: ${SCREEN_SIZES[a]}px) and (max-width: ${SCREEN_SIZES[b]}px){
      ${css(...args)}
    }
  `;

export const theme = {
  colors: {
    primary: '#215EE9',
    secondary: '#7D8790',
    background: '#EBF1FF',
    blur: '#bed2ff',
  },
  below,
  above,
  between,
  fontSizes: [
    '14px', // 0
    '16px', // 1
    '20px', // 2
    '56px', // 3
    '65px', // 4
  ],
  lineHeights: [
    '19px', // 0
    '23.56px', // 1
    '24px', // 2
    '30px', // 3
    '66px', // 4
    '66.17px', // 5
    '66.63px', // 6
  ],
  fontWeights: {
    light: '300',
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  boxShadows: [
    '0px 100px 80px rgba(0, 0, 0, 0.07), '
      + '0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0531481),  '
      + ' 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0425185), 0px 20px 13px rgba(0, 0, 0, 0.035), '
      + '   0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0274815),'
      + ' 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.0168519);', // 0

    '0px 100px 161px rgba(33, 94, 233, 0.08),'
      + '0px 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),'
      + '  0px 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),'
      + ' 0px 20px 26.1625px rgba(33, 94, 233, 0.04),'
      + ' 0px 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),'
      + ' 0px 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593)', // 1
  ],
};
