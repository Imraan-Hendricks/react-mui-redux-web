import React from 'react';
import Auth from '../../components/auth/auth';
import useHome from './use-home';

const Home = () => {
  useHome();

  return (
    <div>
      <h1>Home</h1>
      <Auth />
    </div>
  );
};

export default Home;
