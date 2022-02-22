import React, { useState } from "react";
import {
  ContentInput,
  Input,
  InputButton,
  MessageIcon,
} from "../Main/components";

export const GetStartedForm = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = (e) => {
    alert(email);
    e.preventDefault();
    setEmail("");
  };
  const onEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <ContentInput>
        <MessageIcon />
        <Input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={onEmailChange}
        />
        <InputButton type="submit">Get Started</InputButton>
      </ContentInput>
    </form>
  );
};
