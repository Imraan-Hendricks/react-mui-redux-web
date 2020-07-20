import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoadSession from '../components/load-session/load-session';
import Backdrop from '../components/backdrop/backdrop';
import Snackbar from '../components/snackbar/snackbar';
import Navbar from '../components/navbar/navbar';
import Home from './home/home';
import Login from './login/login';
import Logout from './logout/logout';
import NotFound from './not-found/not-found';

const Routes = () => (
  <BrowserRouter>
    <LoadSession />
    <Backdrop />
    <Snackbar />
    <Navbar />
    <Switch>
      <Route component={Home} exact path='/' strict />
      <Route component={Login} exact path='/login' strict />
      <Route component={Logout} exact path='/logout' strict />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
