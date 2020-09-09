import React from 'react';
import useActiveNav from '../../hooks/active-nav';

import Auth from '../../modules/auth/auth';

const Home = () => {
  useActiveNav('home');

  return (
    <div>
      <h1>Home</h1>
      <Auth />
    </div>
  );
};

export default Home;
