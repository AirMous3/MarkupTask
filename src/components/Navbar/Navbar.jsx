import React from "react";
import styled from "styled-components";

const UlWrapper = styled.ul`
  display: flex;

  li {
    margin-left: 45px;
  }
  a {
    color: #7d8790;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Navbar = () => {
  return (
    <nav>
      <UlWrapper>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#clinic">Clinic</a>
        </li>
        <li>
          <a href="#doctors">Doctors</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </UlWrapper>
    </nav>
  );
};
