import styled from 'styled-components';

import bottomLines from '@/assets/icons/bottomLines.svg';
import topLines from '@/assets/icons/toplines.svg';

export const AppMain = styled.main`
  padding-top: 150px;

  ${({ theme }) => theme.above.laptop`
      padding-left: 74px;
      background-image: url(${topLines}), url(${bottomLines});
      background-repeat: no-repeat;
      background-position: 100% 7%,0% 97%;
`}
  ${({ theme }) => theme.below.tablet`
      padding-top: 24px;
      padding-bottom: 122px;
`}

  ${({ theme }) => theme.between('tablet', 'laptop')`
      padding-top: 40px;
`}
`;
