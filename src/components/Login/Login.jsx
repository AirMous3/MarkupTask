import React from "react";
import { LoginWrapper, NotificationIcon } from "./components";
import { Button } from "../ReusableComponents/components";

export const Login = () => {
  return (
    <LoginWrapper>
      <a href="#login">Log In</a>
      <Button>Register</Button>
      <NotificationIcon />
    </LoginWrapper>
  );
};
