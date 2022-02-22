import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Title } from "../Title/Title";
import { Login } from "../Login/Login";
import { Container } from "../../App";
import { HeaderWrapper } from "./components";

export const Header = () => {
  return (
    <header>
      <Container>
        <HeaderWrapper>
          <Title />
          <Navbar />
          <Login />
        </HeaderWrapper>
      </Container>
    </header>
  );
};
