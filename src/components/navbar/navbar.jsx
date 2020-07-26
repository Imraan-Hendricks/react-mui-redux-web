import React from 'react';
import { useSelector } from 'react-redux';
import useRedirect from '../../hooks/redirect';
import { AppBar, Toolbar } from '@material-ui/core';
import Drawer from './drawer/drawer';
import Links from './links/links';
import Logo from './logo/logo';

const Navbar = () => {
  const _id = useSelector((state) => state.components.auth.state._id);

  const { setUrl } = useRedirect();

  const isAuthenticated = () => {
    if (!_id) return false;
    return true;
  };

  const home = { id: 'home', name: 'home', onClick: () => setUrl('/') };

  const contact = {
    id: 'contact',
    name: 'contact',
    onClick: () => setUrl('/contact'),
  };

  const login = {
    id: 'login',
    name: 'login',
    onClick: () => setUrl('/login'),
  };

  const management = {
    id: 'management',
    name: 'management',
    dropdownItems: [
      {
        id: 'admin',
        name: 'admin',
        onClick: () => setUrl('/management/admin'),
      },
      {
        id: 'roles',
        name: 'roles',
        onClick: () => setUrl('/management/roles'),
      },
    ],
  };

  const logout = {
    id: 'logout',
    name: 'logout',
    onClick: () => setUrl('/logout'),
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
