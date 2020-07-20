import React from 'react';
import useLogout from './use-logout';

const Logout = () => {
  useLogout();

  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
