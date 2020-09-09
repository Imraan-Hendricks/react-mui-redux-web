import React from 'react';
import { Facebook, GitHub } from '@material-ui/icons';
import Google from './google.svg';
import { useIconsStyles } from './social-styles';

const FacebookIcon = () => {
  const classes = useIconsStyles();
  return <Facebook className={classes.icon} style={{ color: '#3b5998' }} />;
};

const GitHubIcon = () => {
  const classes = useIconsStyles();
  return <GitHub className={classes.icon} style={{ color: '#000' }} />;
};

const GoogleIcon = () => {
  return <img src={Google} alt='googleIcon' />;
};

export { FacebookIcon, GitHubIcon, GoogleIcon };
