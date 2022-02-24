import styled from "styled-components";
import { DESKTOP, MOBILE, TABLET } from "../../Variables";

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
    padding: 0 20px;

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
`;
