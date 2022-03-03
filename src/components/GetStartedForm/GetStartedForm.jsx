import React, { useCallback, useState } from 'react';
import { getStartedFormComponents } from '@/components/GetStartedForm';
import { reusableComponents } from '@/components/ReusableComponents';

const { Form, Input, MessageIcon } = getStartedFormComponents;
const { Button } = reusableComponents;

const GetStartedForm = React.memo(() => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = useCallback((e) => {
    alert(email);
    e.preventDefault();
    setEmail('');
  }, []);

  const onEmailChange = useCallback((e) => {
    setEmail(e.currentTarget.value);
  }, []);

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
});

export default GetStartedForm;
