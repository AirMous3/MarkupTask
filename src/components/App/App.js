import React from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Container } from "../ReusableComponents/components";
import { AppMain } from "./components";

export const App = () => {
  // some changes
  return (
    <AppMain>
      <Container>
        <Header />
        <Main />
      </Container>
    </AppMain>
  );
};
