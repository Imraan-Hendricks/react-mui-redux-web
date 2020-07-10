import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Home from './home/home';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route component={Home} exact path='/' strict />
    </Switch>
  </BrowserRouter>
);

export default Routes;
