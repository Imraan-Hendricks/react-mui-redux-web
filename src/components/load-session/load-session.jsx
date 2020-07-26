import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handle } from '../../utils/common';
import { getAuthInfo } from '../../api/api-auth';
import authOperations from '../auth/redux/auth-operations';
import backdropOperations from '../backdrop/redux/backdrop-operations';
import snackbarOperations from '../snackbar/redux/snackbar-operations';

const LoadSession = () => {
  const dispatch = useDispatch();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) return dispatch(backdropOperations.setIsOpen(false));
    dispatch(backdropOperations.setIsOpen(true));
  }, [dispatch, isReady]);

  const reqAuthInfo = useCallback(async () => {
    const [authInfo, err] = await handle(getAuthInfo());
    if (err) {
      dispatch(
        snackbarOperations.pushNotification({
          msg: err[0].msg,
          type: 'error',
        })
      );
      return setIsReady(true);
    }

    if (!authInfo.isAuthenticated) return setIsReady(true);

    dispatch(authOperations.setUser(authInfo.user));
    dispatch(
      snackbarOperations.pushNotification({
        msg: `Welcome ${authInfo.user.displayName}`,
      })
    );

    setIsReady(true);
  }, [dispatch]);

  useEffect(() => {
    reqAuthInfo();
  }, [reqAuthInfo]);

  return <Fragment />;
};

export default LoadSession;
