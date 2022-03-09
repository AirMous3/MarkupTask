import styled from 'styled-components';

import { Burger } from '@/components/Burger';
import { Button } from '@/components/Button';

export const StyledBurger = styled(Burger)``;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.above.laptop`
      ${Button} {
        padding: 16px 48px 15px 49px;
      }
`}

  ${({ theme }) => theme.above.laptop`
     ${StyledBurger} {
        display: none;
      }
`}

  ${({ theme }) => theme.above.laptop`
       ${Button} {
        margin-left: 41px;
        margin-right: 18px;
        padding: 17px 40px 16px 42px;
      }
`}

  ${({ theme }) => theme.between('tablet', 'laptop')`
    padding: 0 20px;
`}


  ${({ theme }) => theme.between('tablet', 'laptop')`
      ${StyledBurger} {
        display: none;
      }
`}

  ${({ theme }) => theme.between('tablet', 'laptop')`
       ${Button} {
        margin-left: 16px;
        margin-right: 17px;
        padding-left: 24px;
        padding-right: 24px;
      }
`}

  ${({ theme }) => theme.below.tablet`
      padding: 0 16px;

      nav {
        display: none;
      }
`}
`;
