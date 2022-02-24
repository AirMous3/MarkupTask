import styled from "styled-components";
import { DESKTOP, MOBILE, TABLET } from "../../constants/Variables";
import { Button } from "../ReusableComponents/components";

export const BurgerWrap = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
`;

export const BurgerBar = styled.div`
  width: 28px;
  height: 4px;
  border-radius: 5px;
  background: #000;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;

  @media ${TABLET} {
    padding: 0 20px;
  }

  @media ${MOBILE} {
    padding: 0 13px;

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
