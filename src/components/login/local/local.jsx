import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { Button, TextField } from '@material-ui/core';
import { useLocalStyles } from './local-styles';

const Local = () => {
  const classes = useLocalStyles();
  return (
    <div className={classes.localWrapper}>
      <div className={classes.formWrapper}>
        <AccountCircle className={classes.accountIcon} />
        <form noValidate autoComplete='off'>
          <TextField
            className={classes.textField}
            label='email'
            placeholder='enter email'
            type='text'
          />
          <TextField
            autoComplete='off'
            className={classes.textField}
            label='password'
            placeholder='enter password'
            type='password'
          />
        </form>
        <Button
          className={classes.loginButton}
          variant='contained'
          color='primary'>
          login
        </Button>
      </div>
    </div>
  );
};

export default Local;
