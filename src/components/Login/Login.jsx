import React from 'react';
import { loginComponents } from '@/components/Login';
import { reusableComponents } from '@/components/ReusableComponents';

const { LoginWrapper, NotificationIcon } = loginComponents;
const { Button } = reusableComponents;

const Login = React.memo(() => (
  <LoginWrapper>
    <a href="#login">Log In</a>
    <Button>Register</Button>
    <NotificationIcon />
  </LoginWrapper>
));

export default Login;
