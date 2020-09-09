import React, { useState, useEffect, useCallback } from 'react';
import { handle } from '../../utils/common';
import { logout as logoutRequest } from '../../api/api-auth';
import useActiveNav from '../../hooks/active-nav';
import useAuthorization from '../../hooks/authorization';
import useRedirect from '../../hooks/redirect';
import useRoot from '../../redux/root';
import useSnackbar from '../../modules/snackbar/redux/snackbar';

import { Button, CircularProgress } from '@material-ui/core';

const Logout = () => {
  useActiveNav('logout');
  useAuthorization('authenticated', '/');

  const [state, setState] = useState('default');

  const redirect = useRedirect();
  const redirectCallback = useCallback(redirect, []);

  const { resetApp } = useRoot();
  const resetAppCallback = useCallback(resetApp, []);

  const { pushNotification } = useSnackbar();
  const pushNotificationCallback = useCallback(pushNotification, []);

  const logoutTrigger = () => setState('logout');

  const logout = useCallback(async () => {
    const [authInfo, err] = await handle(logoutRequest());
    if (err) {
      setState('error');
      return pushNotificationCallback({
        msg: err[0].msg,
        type: 'error',
      });
    }

    if (process.env.NODE_ENV === 'development')
      console.log('logout api response:', authInfo);

    resetAppCallback();
    redirectCallback('/');
    pushNotificationCallback({
      msg: 'see you soon',
    });
  }, [resetAppCallback, pushNotificationCallback, redirectCallback]);

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
