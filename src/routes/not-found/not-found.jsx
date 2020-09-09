import React from 'react';
import useActiveNav from '../../hooks/active-nav';
import useRedirect from '../../hooks/redirect';

import Button from '@material-ui/core/Button';
import { useNotFoundStyles } from './not-found-styles';

const NotFound = () => {
  useActiveNav('notFound');

  const redirect = useRedirect();

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
