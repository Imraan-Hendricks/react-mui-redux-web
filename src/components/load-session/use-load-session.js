import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../auth/redux/auth-operations';
import backdropOperations from '../backdrop/redux/backdrop-operations';
import { handle } from './load-session-helpers';
import { getAuthInfo } from '../../api/api-auth';

const LoadSession = () => {
  const dispatch = useDispatch();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      return dispatch(backdropOperations.setIsOpen(false));
    }
    dispatch(backdropOperations.setIsOpen(true));
  }, [dispatch, isReady]);

  const reqAuthInfo = useCallback(async () => {
    const [authInfo, err] = await handle(getAuthInfo());
    if (err) {
      console.log(err);
      return setIsReady(true);
    }

    if (!authInfo.isAuthenticated) {
      console.log(authInfo);
      return setIsReady(true);
    }

    dispatch(authOperations.setUser(authInfo.user));
    console.log(authInfo);
    setIsReady(true);
  }, [dispatch]);

  useEffect(() => {
    reqAuthInfo();
  }, [reqAuthInfo]);

  return;
};

export default LoadSession;
