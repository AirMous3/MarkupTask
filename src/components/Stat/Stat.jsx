import React from 'react';
import { StatDescription, StatNumber, StatNumberAccent } from './components';

export const Stat = React.memo(({ number, description, accent }) => (
  <div>
    {accent ? (
      <StatNumberAccent>{number}</StatNumberAccent>
    ) : (
      <StatNumber>{number}</StatNumber>
    )}

    <StatDescription>{description}</StatDescription>
  </div>
));
