import styled from "styled-components";
import { TABLET } from "../../Variables";

export const UlWrapper = styled.ul`
  display: flex;
  margin-left: 25px;

  li {
    margin-left: 46px;
  }
  a {
    font-style: normal;
    color: #7d8790;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }

  @media ${TABLET} {
    padding: 0;
    margin: 0;

    li {
      margin-left: 18px;
    }
  }
`;
