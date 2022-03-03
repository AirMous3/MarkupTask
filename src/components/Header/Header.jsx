import React from 'react';
import { headerComponents } from '@/components/Header';
import { Title } from '@/components/Title';
import { Navbar } from '@/components/Navbar';
import { Login } from '@/components/Login';
import { Burger } from '@/components/Burger';

const { HeaderWrapper } = headerComponents;

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
