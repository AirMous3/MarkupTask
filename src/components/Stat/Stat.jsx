import React from 'react';
import { statComponents } from '@/components/Stat';

const { StatNumberAccent, StatNumber, StatDescription } = statComponents;

function Stat({ number, description, accent }) {
  return (
    <div>
      {accent ? (
        <StatNumberAccent>{number}</StatNumberAccent>
      ) : (
        <StatNumber>{number}</StatNumber>
      )}

      <StatDescription>{description}</StatDescription>
    </div>
  );
}
export default Stat;
