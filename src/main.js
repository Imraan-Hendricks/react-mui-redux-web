import React from 'react';
import useLoadSession from './hooks/load-session';

import Backdrop from './modules/backdrop/backdrop';
import Navbar from './modules/navbar/navbar';
import Routes from './routes/routes';
import Snackbar from './modules/snackbar/snackbar';

const Main = () => {
  useLoadSession();
  return (
    <div>
      <Backdrop />
      <Snackbar />
      <Navbar />
      <Routes />
    </div>
  );
};

export default Main;
