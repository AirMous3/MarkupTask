import { StatDescription, StatNumber } from "../Main/components";
import React from "react";

export const Stat = ({ number, description, color }) => {
  return (
    <div>
      <StatNumber color={color}>{number}</StatNumber>
      <StatDescription>{description}</StatDescription>
    </div>
  );
};
