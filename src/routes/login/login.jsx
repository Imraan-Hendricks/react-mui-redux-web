import React from 'react';
import useActiveNav from '../../hooks/active-nav';
import useAuthorization from '../../hooks/authorization';

import Local from './local/local';
import Paper from '@material-ui/core/Paper';
import Social from './social/social';
import { useLoginStyles } from './login-styles';

const Login = () => {
  useActiveNav('login');
  useAuthorization('notAuthenticated', '/');

  const classes = useLoginStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <Local />
      <Social />
    </Paper>
  );
};

export default Login;
