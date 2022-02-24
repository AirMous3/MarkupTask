import React, { useState } from "react";
import { Form, Input, InputButton, MessageIcon } from "./components";

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
    <Form onSubmit={onSubmitHandler}>
      <MessageIcon />
      <Input
        type="text"
        placeholder="Enter your email"
        value={email}
        required
        onChange={onEmailChange}
      />
      <InputButton type="submit">Get Started</InputButton>
    </Form>
  );
};
