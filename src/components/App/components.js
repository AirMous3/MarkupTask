import styled from "styled-components";
import { DESKTOP, MOBILE, TABLET } from "../../constants/Variables";
import topLines from "../../assets/icons/toplines.svg";
import bottomLines from "../../assets/icons/bottomLines.svg";

export const AppMain = styled.main`
  padding-top: 150px;

  @media ${DESKTOP} {
    padding-left: 40px;
    background-image: url(${topLines}), url(${bottomLines});
    background-repeat: no-repeat;
    background-position: 81% 7%, 11% 97%;
  }

  @media ${TABLET} {
    padding-top: 40px;
  }

  @media ${MOBILE} {
    padding-top: 23px;
  }
`;
