import styled from "styled-components";
import { HD, TABLET } from "../../Variables";

export const UlWrapper = styled.ul`
  display: flex;
  margin-left: 25px;

  li {
    margin-left: 46px;
  }

  a {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media ${TABLET} {
    padding: 0;
    margin: 0;

    li {
      margin-left: 18px;
    }
  }
  @media ${HD} {
    padding: 0;
    margin: 0;

    li {
      margin-left: 18px;
    }
  }
`;
