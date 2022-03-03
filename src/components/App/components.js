import styled from 'styled-components';
import bottomLines from '@/assets/icons/bottomLines.svg';
import topLines from '@/assets/icons/toplines.svg';
import { DESKTOP, MOBILE, TABLET } from '@/constants/Variables';

export const AppMain = styled.main`
  padding-top: 150px;

  @media ${DESKTOP} {
    padding-left: 40px;
    background-image: url(${topLines}), url(${bottomLines});
    background-repeat: no-repeat;
    background-position: 81% 7%, 11% 91%;
  }

  @media ${TABLET} {
    padding-top: 40px;
  }

  @media ${MOBILE} {
    padding-top: 24px;
  }
`;
