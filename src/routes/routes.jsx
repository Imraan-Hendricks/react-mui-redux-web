import React from 'react';
import useRoutes from './use-routes';
import Home from './home/home';

const Routes = () => {
  const { home } = useRoutes();

  return <div>{home && <Home match={home} />}</div>;
};

export default Routes;
