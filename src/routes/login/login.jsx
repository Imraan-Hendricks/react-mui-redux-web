import React from 'react';
import LoginComp from '../../components/login/login';
import useLogin from './use-login';

const Login = () => {
  useLogin();

  return (
    <div>
      <LoginComp />
    </div>
  );
};

export default Login;
