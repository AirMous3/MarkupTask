import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import topLines from "./assets/icons/toplines.svg";
import bottomLines from "./assets/icons/bottomLines.svg";
import { DESKTOP, MOBILE, TABLET } from "./Variables";

export const Container = styled.div`
  max-width: 1372px;
  margin-left: auto;
  margin-right: auto;
`;

const AppMain = styled.main`
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
    padding-top: 20px;
  }
`;
export const App = () => {
  return (
    <>
      <AppMain>
        <Container>
          <Header />
          <Main />
        </Container>
      </AppMain>
    </>
  );
};
