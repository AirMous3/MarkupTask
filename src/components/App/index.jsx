import React from 'react';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

import { AppMain } from './components';

export const App = React.memo(() => (
  <AppMain>
    <Container>
      <Header />
      <Main />
    </Container>
  </AppMain>
));
