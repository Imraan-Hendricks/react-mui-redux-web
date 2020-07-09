import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Drawer from './drawer/drawer';
import Links from './links/links';
import Logo from './logo/logo';
import useNavbar from './use-navbar';

const Navbar = () => {
  const { links } = useNavbar();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Logo />
        <Links links={links} />
        <Drawer links={links} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
