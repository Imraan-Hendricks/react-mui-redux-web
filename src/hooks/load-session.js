import { useCallback, useEffect, useState } from 'react';
import { handle } from '../utils/common';
import { getAuthInfo } from '../api/api-auth';
import useAuth from '../components/auth/redux/auth';
import useBackdrop from '../components/backdrop/redux/backdrop';
import useSnackbar from '../components/snackbar/redux/snackbar';

const LoadSession = () => {
  const [isReady, setIsReady] = useState(false);

  const { setIsOpen } = useBackdrop();
  const setIsOpenCallback = useCallback(setIsOpen, []);

  const { setUser } = useAuth();
  const setUserCallback = useCallback(setUser, []);

  const { pushNotification } = useSnackbar();
  const pushNotificationCallback = useCallback(pushNotification, []);

  useEffect(() => {
    if (isReady) return setIsOpenCallback(false);
    setIsOpenCallback(true);
  }, [setIsOpenCallback, isReady]);

  const reqAuthInfo = useCallback(async () => {
    const [authInfo, err] = await handle(getAuthInfo());
    if (err) {
      pushNotificationCallback({
        msg: err[0].msg,
        type: 'error',
      });
      return setIsReady(true);
    }

    if (!authInfo.isAuthenticated) return setIsReady(true);

    setUserCallback(authInfo.user);
    pushNotificationCallback({
      msg: `Welcome ${authInfo.user.displayName}`,
    });

    setIsReady(true);
  }, [pushNotificationCallback, setUserCallback]);

  useEffect(() => {
    reqAuthInfo();
  }, [reqAuthInfo]);
};

export default LoadSession;
