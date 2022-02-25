import {StatDescription, StatNumber, StatNumberAccent} from "../Main/components";
import React from "react";

export const Stat = ({number, description, accent}) => {
    return (
        <div>
            {
                accent ?
                    <StatNumberAccent>{number}</StatNumberAccent> :
                    <StatNumber>{number}</StatNumber>}

            <StatDescription>{description}</StatDescription>
        </div>
    );
};
