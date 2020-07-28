import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handle } from '../utils/common';
import { getAuthInfo } from '../api/api-auth';
import snackbarOperations from '../components/snackbar/redux/snackbar-operations';
import useAuth from '../components/auth/redux/auth';
import useBackdrop from '../components/backdrop/redux/backdrop';

const LoadSession = () => {
  const dispatch = useDispatch();

  const [isReady, setIsReady] = useState(false);

  const { setIsOpen } = useBackdrop();
  const setIsOpenCallback = useCallback(setIsOpen, []);

  const { setUser } = useAuth();
  const setUserCallback = useCallback(setUser, []);

  useEffect(() => {
    if (isReady) return setIsOpenCallback(false);
    setIsOpenCallback(true);
  }, [setIsOpenCallback, isReady]);

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
