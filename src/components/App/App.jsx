import React from 'react';

import { appComponents } from '@/components/App';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { reusableComponents } from '@/components/ReusableComponents';

const { AppMain } = appComponents;
const { Container } = reusableComponents;

const App = React.memo(() => (
  <AppMain>
    <Container>
      <Header />
      <Main />
    </Container>
  </AppMain>
));

export default App;
