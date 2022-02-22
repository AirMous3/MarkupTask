import React from "react";
import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";
import { Title } from "../Title/Title";
import { Login } from "../Login/Login";
import { Container } from "../../App";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
`;

export const Header = () => {
  return (
    <header>
      <Container>
        <HeaderWrapper>
          <Title />
          <Navbar />
          <Login />
        </HeaderWrapper>
      </Container>
    </header>
  );
};
