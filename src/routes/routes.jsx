import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Home from './home/home';
import NotFound from './not-found/not-found';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route component={Home} exact path='/' strict />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
