import React from "react";
import styled from "styled-components";
import windIcon from "../../assets/icons/wind.svg";

const TitleIcon = styled.div`
  background-image: url(${windIcon});
  width: 24px;
  height: 24px;
  border: none;
`;
const TitleWrapper = styled.div`
  display: flex;
`;
const TitleText = styled.div`
  margin-left: 13px;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;

export const Title = () => {
  return (
    <TitleWrapper>
      <TitleIcon />
      <TitleText>Modsen Health</TitleText>
    </TitleWrapper>
  );
};
