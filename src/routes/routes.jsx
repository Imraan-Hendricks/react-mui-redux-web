import React from 'react';
import useRoutes from './use-routes';
import Navbar from '../components/navbar/navbar';
import Home from './home/home';

const Routes = () => {
  const { home } = useRoutes();

  return (
    <div>
      <Navbar />
      {home && <Home match={home} />}
    </div>
  );
};

export default Routes;
