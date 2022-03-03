import React from 'react';
import { burgerComponents } from '@/components/Burger';

const { BurgerWrap, BurgerBar } = burgerComponents;

export const Burger = React.memo(() => (
  <BurgerWrap title="Open menu">
    <BurgerBar />
    <BurgerBar />
    <BurgerBar />
  </BurgerWrap>
));
