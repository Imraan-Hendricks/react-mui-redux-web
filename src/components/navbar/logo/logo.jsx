import React from 'react';
import { Avatar as Circle } from '@material-ui/core';
import logo from './logo.jpg';
import useLogoStyles from './logo-styles';

const Logo = () => {
  const classes = useLogoStyles();

  return <Circle className={classes.logo} alt='logo' src={logo} />;
};

export default Logo;
