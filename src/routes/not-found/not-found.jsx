import React from 'react';
import Button from '@material-ui/core/Button';
import useNotFound from './use-not-found';
import { useNotFoundStyles } from './not-found-styles';

const NotFound = () => {
  const { redirect } = useNotFound();

  const classes = useNotFoundStyles();

  return (
    <div>
      <h1>Page not found</h1>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={() => redirect('/')}>
        site home
      </Button>
    </div>
  );
};

export default NotFound;
