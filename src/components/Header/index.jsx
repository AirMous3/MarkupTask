import React from 'react';

import { Login } from '@/components/Login';
import { Navbar } from '@/components/Navbar';
import { Title } from '@/components/Title';

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
