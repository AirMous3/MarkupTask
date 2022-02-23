import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import topLines from "./assets/icons/toplines.svg";

export const Container = styled.div`
  max-width: 1372px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const AppMain = styled.main`
  padding-top: 150px;
  background-image: url(${topLines});
  background-repeat: no-repeat;
  background-position: 79% 7%;
`;
export const App = () => {
  return (
    <>
      <AppMain>
        <Header />
        <Main />
      </AppMain>
    </>
  );
};
