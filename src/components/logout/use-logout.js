import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { handle } from './logout-helpers';
import { logout as logoutRequest } from '../../api/api-auth';
import rootOperations from '../../redux/root-operations';
import snackbarOperations from '../snackbar/redux/snackbar-operations';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState('default');

  const logoutTrigger = () => {
    setState('logout');
  };

  const redirect = useCallback(
    (url) => {
      if (url && history) {
        if (url === '/back') {
          history.goBack();
          return;
        }
        history.push(url);
      }
    },
    [history]
  );

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
    redirect('/');
    dispatch(
      snackbarOperations.pushNotification({
        msg: 'see you soon',
      })
    );
  }, [dispatch, redirect]);

  useEffect(() => {
    if (state === 'logout') {
      logout();
    }
  }, [logout, state]);

  return {
    state,
    logoutTrigger,
  };
};

export default Logout;
