import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handle } from '../../utils/common';
import { logout as logoutRequest } from '../../api/api-auth';
import rootOperations from '../../redux/root-operations';
import snackbarOperations from '../snackbar/redux/snackbar-operations';
import useRedirect from '../../hooks/redirect';
import { Button, CircularProgress } from '@material-ui/core';

const Logout = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState('default');

  const redirect = useRedirect();
  const redirectCallback = useCallback(redirect, []);

  const logoutTrigger = () => setState('logout');

  const logout = useCallback(async () => {
    const [authInfo, err] = await handle(logoutRequest());
    if (err) {
      setState('error');
      return dispatch(
        snackbarOperations.pushNotification({
          msg: err[0].msg,
          type: 'error',
        })
      );
    }

    if (process.env.NODE_ENV === 'development')
      console.log('logout api response:', authInfo);

    dispatch(rootOperations.resetApp());
    redirectCallback('/');
    dispatch(
      snackbarOperations.pushNotification({
        msg: 'see you soon',
      })
    );
  }, [dispatch, redirectCallback]);

  useEffect(() => {
    if (state === 'logout') logout();
  }, [logout, state]);

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
