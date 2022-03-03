import React from 'react';
import { titleComponents } from '@/components/Title';

const { TitleIcon, TitleText, TitleWrapper } = titleComponents;

function Title() {
  return (
    <TitleWrapper>
      <TitleIcon />
      <TitleText>Modsen Health</TitleText>
    </TitleWrapper>
  );
}
export default Title;
