import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Backdrop from '../components/backdrop/backdrop';
import Navbar from '../components/navbar/navbar';
import Home from './home/home';
import Login from './login/login';
import NotFound from './not-found/not-found';

const Routes = () => (
  <BrowserRouter>
    <Backdrop />
    <Navbar />
    <Switch>
      <Route component={Home} exact path='/' strict />
      <Route component={Login} exact path='/login' strict />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
