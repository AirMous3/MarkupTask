import styled from 'styled-components';
import { Button } from '@/components/ReusableComponents/components';
import { DESKTOP, MOBILE, TABLET } from '@/constants/Variables';
import { burgerComponents } from '@/components/Burger';

const { BurgerWrap } = burgerComponents;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;

  @media ${TABLET} {
    padding: 0 20px;
  }

  @media ${MOBILE} {
    padding: 0 16px;

    nav {
      display: none;
    }
  }

  @media ${TABLET} {
    ${BurgerWrap} {
      display: none;
    }
  }

  @media ${DESKTOP} {
    ${BurgerWrap} {
      display: none;
    }
  }
  @media ${DESKTOP} {
    ${Button} {
      margin-left: 41px;
      margin-right: 18px;
      padding: 17px 40px 16px 42px;
    }
  }
  @media ${TABLET} {
    ${Button} {
      margin-left: 16px;
      margin-right: 17px;
      padding-left: 24px;
      padding-right: 24px;
    }
  }
`;
