import styled from 'styled-components';
import { TABLET } from '@/constants/Variables';

export const StatNumber = styled.div`
  font-weight: bold;
  font-size: 56px;
  line-height: 66px;
  letter-spacing: -4px;
  color: black;
  margin-bottom: 13px;

  @media ${TABLET} {
    font-size: 34px;
  }
`;
export const StatNumberAccent = styled(StatNumber)`
  color: #215ee9;
`;

export const StatDescription = styled.div`
  color: black;
  width: 141px;
  height: 50px;
  font-size: 16px;
  line-height: 24px;

  @media ${TABLET} {
    font-size: 14px;
  }
`;
