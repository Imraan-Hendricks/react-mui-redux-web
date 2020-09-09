import React from 'react';
import useAuth from '../auth/redux/auth';
import useRedirect from '../../hooks/redirect';

import { AppBar, Toolbar } from '@material-ui/core';
import Drawer from './drawer/drawer';
import Links from './links/links';
import Logo from './logo/logo';

const Navbar = () => {
  const { _id } = useAuth();

  const redirect = useRedirect();

  const isAuthenticated = () => {
    if (!_id) return false;
    return true;
  };

  const home = { id: 'home', name: 'home', onClick: () => redirect('/') };

  const contact = {
    id: 'contact',
    name: 'contact',
    onClick: () => redirect('/contact'),
  };

  const login = {
    id: 'login',
    name: 'login',
    onClick: () => redirect('/login'),
  };

  const management = {
    id: 'management',
    name: 'management',
    dropdownItems: [
      {
        id: 'admin',
        name: 'admin',
        onClick: () => redirect('/management/admin'),
      },
      {
        id: 'roles',
        name: 'roles',
        onClick: () => redirect('/management/roles'),
      },
    ],
  };

  const logout = {
    id: 'logout',
    name: 'logout',
    onClick: () => redirect('/logout'),
  };

  const authLinks = [home, contact, logout, management];
  const links = [home, contact, login];

  const getLinks = () => {
    if (isAuthenticated()) return authLinks;
    return links;
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Logo />
        <Links links={getLinks()} />
        <Drawer links={getLinks()} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
