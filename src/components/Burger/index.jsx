import React from 'react';

import { BurgerBar, BurgerWrap } from './components';

export const Burger = React.memo(({ className }) => (
  <BurgerWrap className={className} title="Open menu">
    <BurgerBar />
    <BurgerBar />
    <BurgerBar />
  </BurgerWrap>
));
