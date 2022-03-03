import styled from 'styled-components';
import windIcon from '@/assets/icons/wind.svg';
import { MOBILE } from '@/constants/Variables';

export const TitleIcon = styled.div`
  background-image: url(${windIcon});
  width: 24px;
  height: 24px;
  border: none;
`;
export const TitleWrapper = styled.div`
  display: flex;
`;
export const TitleText = styled.div`
  margin-left: 13px;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;

  @media ${MOBILE} {
    margin-left: 9px;
  }
`;
