import React from 'react';
import { Container } from '@/components/ReusableComponents';
import { Main } from '@/components/Main';
import { Header } from '@/components/Header';
import { AppMain } from './components';

export const App = React.memo(() => (
  <AppMain>
    <Container>
      <Header />
      <Main />
    </Container>
  </AppMain>
));
