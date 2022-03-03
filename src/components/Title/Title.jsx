import React from 'react';
import { TitleIcon, TitleText, TitleWrapper } from './components';

export const Title = React.memo(() => (
  <TitleWrapper>
    <TitleIcon />
    <TitleText>Modsen Health</TitleText>
  </TitleWrapper>
));
