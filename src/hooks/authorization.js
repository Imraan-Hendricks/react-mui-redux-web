import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Authorization = (type, url) => {
  const history = useHistory();

  const _id = useSelector((state) => state.components.auth.state._id);

  const redirect = useCallback(
    (url) => {
      if (url && history) {
        if (url === '/back') return history.goBack();
        history.push(url);
      }
    },
    [history]
  );

  const authenticated = useCallback(() => {
    if (!_id) return redirect(url);
  }, [redirect, _id, url]);

  const notAuthenticated = useCallback(() => {
    if (_id) return redirect(url);
  }, [redirect, _id, url]);

  useEffect(() => {
    if (type === 'authenticated') return authenticated();
    if (type === 'notAuthenticated') return notAuthenticated();
  }, [authenticated, notAuthenticated, type]);
};

export default Authorization;
