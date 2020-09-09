import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Login from './login/login';
import Logout from './logout/logout';
import NotFound from './not-found/not-found';

const Routes = () => (
  <Switch>
    <Route component={Home} exact path='/' strict />
    <Route component={Login} exact path='/login' strict />
    <Route component={Logout} exact path='/logout' strict />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
