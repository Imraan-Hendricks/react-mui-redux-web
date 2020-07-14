import React from 'react';
import Local from './local/local';
import Paper from '@material-ui/core/Paper';
import Social from './social/social';
import { useLoginStyles } from './login-styles';

const Login = () => {
  const classes = useLoginStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Local />
      <Social />
    </Paper>
  );
};

export default Login;
