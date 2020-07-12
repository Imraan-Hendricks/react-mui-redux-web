import React from 'react';
import useLogin from './use-login';

const Login = () => {
  useLogin();

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
