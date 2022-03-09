import styled from 'styled-components';

import union from '@/assets/icons/Union.svg';
import { Button } from '@/components/ReusableComponents';

export const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 515px;
  padding: 8px 11px 10px 24px;
  border-radius: 40px;
  background: #ffffff;
  margin-bottom: 120px;
  box-shadow: ${(props) => props.theme.boxShadows[0]};
  box-sizing: border-box;

  ${({ theme }) => theme.above.laptop`
      ${Button} {
        padding: 16px 45px 15px 48px;
      }
`}

  ${({ theme }) => theme.between('tablet', 'laptop')`
      max-width: 427px;
      margin-bottom: 80px;
`}

  ${({ theme }) => theme.below.tablet`
      margin-bottom: 0;

      ${Button} {
        padding-left: 45px;
        padding-right: 45px;
      }
`}
  ${({ theme }) => theme.below.mobileM`
     ${Button} {
        padding-left: 24px;
        padding-right: 24px;
      }
`}
`;

export const MessageIcon = styled.div`
  flex-shrink: 0;
  background-image: url(${union});
  margin-right: 20px;
  width: 20px;
  height: 16px;
  opacity: 0.2;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;

  ::placeholder {
    font-size: ${(props) => props.theme.fontSizes[1]};
    line-height: ${(props) => props.theme.lineHeights[0]};
    opacity: 0.2;
  }
`;
