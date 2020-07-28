import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handle } from '../utils/common';
import { getAuthInfo } from '../api/api-auth';
import backdropOperations from '../components/backdrop/redux/backdrop-operations';
import snackbarOperations from '../components/snackbar/redux/snackbar-operations';
import useAuth from '../components/auth/redux/auth';

const LoadSession = () => {
  const dispatch = useDispatch();

  const [isReady, setIsReady] = useState(false);

  const { setUser } = useAuth();
  const setUserCallback = useCallback(setUser, []);

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

    setUserCallback(authInfo.user);
    dispatch(
      snackbarOperations.pushNotification({
        msg: `Welcome ${authInfo.user.displayName}`,
      })
    );

    setIsReady(true);
  }, [dispatch, setUserCallback]);

  useEffect(() => {
    reqAuthInfo();
  }, [reqAuthInfo]);
};

export default LoadSession;
