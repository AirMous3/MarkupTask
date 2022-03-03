import React from 'react';
import { headerComponents } from '@/components/Header';
import { Title } from '@/components/Title';
import { Navbar } from '@/components/Navbar';
import { Login } from '@/components/Login';

const { BurgerWrap, HeaderWrapper, BurgerBar } = headerComponents;

function Burger() {
  return (
    <BurgerWrap title="Open menu">
      <BurgerBar />
      <BurgerBar />
      <BurgerBar />
    </BurgerWrap>
  );
}

function Header() {
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
}

export default Header;
