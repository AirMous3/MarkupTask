import React from 'react';

import { Button } from '@/components/Button';

import { LoginWrapper, NotificationIcon } from './components';

export const Login = React.memo(() => (
  <LoginWrapper>
    <a href="#login">Log In</a>
    <Button>Register</Button>
    <NotificationIcon />
  </LoginWrapper>
));
