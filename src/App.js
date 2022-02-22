import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";

const AppContainer = styled.div`
  max-width: 1456px;
  padding-left: 40px;
  padding-right: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const App = () => {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
};
