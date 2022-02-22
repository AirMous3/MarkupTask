import React from "react";
import { UlWrapper } from "./components";

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
