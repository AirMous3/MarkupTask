import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Title } from "../Title/Title";
import { Login } from "../Login/Login";
import { BurgerBar, BurgerWrap, HeaderWrapper } from "./components";

const Burger = () => {
  return (
    <BurgerWrap title="Open menu">
      <BurgerBar />
      <BurgerBar />
      <BurgerBar />
    </BurgerWrap>
  );
};

export const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <Title />
        <Navbar />
        <Login />
        <Burger />
      </HeaderWrapper>
    </header>
  );
};
