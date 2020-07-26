import React from 'react';
import Auth from '../../components/auth/auth';
import useActiveNav from '../../hooks/active-nav';

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
