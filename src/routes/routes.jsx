import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} exact path='/' strict />
    </Switch>
  </BrowserRouter>
);

export default Routes;
