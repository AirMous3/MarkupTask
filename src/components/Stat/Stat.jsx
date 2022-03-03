import React from 'react';
import { statComponents } from '@/components/Stat';

const { StatNumberAccent, StatNumber, StatDescription } = statComponents;

const Stat = React.memo(({ number, description, accent }) => (
  <div>
    {accent ? (
      <StatNumberAccent>{number}</StatNumberAccent>
    ) : (
      <StatNumber>{number}</StatNumber>
    )}

    <StatDescription>{description}</StatDescription>
  </div>
));

export default Stat;
