import React from 'react';
import LogoutComp from '../../components/logout/logout';
import useActiveNav from '../../hooks/active-nav';
import useAuthorization from '../../hooks/authorization';

const Logout = () => {
  useActiveNav('logout');
  useAuthorization('authenticated', '/');

  return (
    <div>
      <LogoutComp />
    </div>
  );
};

export default Logout;
