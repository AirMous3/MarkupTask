import React from 'react';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Container } from '@/components/ReusableComponents';
import { AppMain } from './components';

export const App = React.memo(() => (
  <AppMain>
    <Container>
      <Header />
      <Main />
    </Container>
  </AppMain>
));
