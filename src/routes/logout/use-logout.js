import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useActiveNav from '../../hooks/active-nav';

const Logout = () => {
  const history = useHistory();

  const userId = useSelector((state) => state.components.auth.state._id);

  useActiveNav('logout');

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

  useEffect(() => {
    if (!userId) {
      redirect('/');
    }
  }, [redirect, userId]);

  return;
};

export default Logout;
