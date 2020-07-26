import React from 'react';
import LoginComp from '../../components/login/login';
import useActiveNav from '../../hooks/active-nav';
import useAuthorization from '../../hooks/authorization';

const Login = () => {
  useActiveNav('login');
  useAuthorization('notAuthenticated', '/');

  return (
    <div>
      <LoginComp />
    </div>
  );
};

export default Login;
