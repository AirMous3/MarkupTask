import React, { useCallback, useState } from 'react';

import { Button } from '@/components/Button';

import { Form, Input, MessageIcon } from './components';

export const GetStartedForm = React.memo(() => {
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setEmail('');
  }, []);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.currentTarget.value);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <MessageIcon />
      <Input
        title="Email input"
        type="text"
        placeholder="Enter your email"
        value={email}
        required
        onChange={handleEmailChange}
      />
      <Button type="submit">Get Started</Button>
    </Form>
  );
});
