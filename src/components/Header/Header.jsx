import React from 'react';
import { Title } from '@/components/Title';
import { Navbar } from '@/components/Navbar';
import { Login } from '@/components/Login';
import { HeaderWrapper, StyledBurger } from './components';

export const Header = React.memo(() => (
  <header>
    <HeaderWrapper>
      <Title />
      <Navbar />
      <Login />
      <StyledBurger />
    </HeaderWrapper>
  </header>
));
