import React from "react";
import { LoginWrapper, NotificationIcon, RegisterButton } from "./components";

export const Login = () => {
  return (
    <LoginWrapper>
      <a href="#login">Log In</a>
      <RegisterButton>Register</RegisterButton>
      <NotificationIcon />
    </LoginWrapper>
  );
};
