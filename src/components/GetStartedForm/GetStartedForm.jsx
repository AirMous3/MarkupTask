import React, { useState } from "react";
import { Form, Input, MessageIcon } from "./components";
import { Button } from "../ReusableComponents/components";

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
        title="Email input"
        type="text"
        placeholder="Enter your email"
        value={email}
        required
        onChange={onEmailChange}
      />
      <Button type="submit">Get Started</Button>
    </Form>
  );
};
