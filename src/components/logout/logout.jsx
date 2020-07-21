import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import useLogout from './use-logout';

const Logout = () => {
  const { state, logoutTrigger } = useLogout();

  return (
    <div>
      <h1>logout:</h1>

      {state === 'default' && (
        <div>
          <p>default state</p>
          <Button color={'primary'} onClick={logoutTrigger} variant='contained'>
            logout
          </Button>
        </div>
      )}

      {state === 'error' && (
        <div>
          <p>error state</p>
          <Button color={'primary'} onClick={logoutTrigger} variant='contained'>
            logout
          </Button>
        </div>
      )}

      {state === 'logout' && (
        <div>
          <p>logging out state</p>
          <CircularProgress color='primary' />
        </div>
      )}
    </div>
  );
};

export default Logout;
