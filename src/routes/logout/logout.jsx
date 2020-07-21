import React from 'react';
import LogoutComp from '../../components/logout/logout';
import useLogout from './use-logout';

const Logout = () => {
  useLogout();

  return (
    <div>
      <LogoutComp />
    </div>
  );
};

export default Logout;
