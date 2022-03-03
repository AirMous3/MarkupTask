import React from 'react';
import { headerComponents } from '@/components/Header';
import { Title } from '@/components/Title';
import { Navbar } from '@/components/Navbar';
import { Login } from '@/components/Login';

const { BurgerWrap, HeaderWrapper, BurgerBar } = headerComponents;

const Burger = React.memo(() => (
  <BurgerWrap title="Open menu">
    <BurgerBar />
    <BurgerBar />
    <BurgerBar />
  </BurgerWrap>
));

const Header = React.memo(() => (
  <header>
    <HeaderWrapper>
      <Title />
      <Navbar />
      <Login />
      <Burger />
    </HeaderWrapper>
  </header>
));

export default Header;
