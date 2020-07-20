import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import navbarOperations from '../../components/navbar/redux/navbar-operations';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.components.auth.state._id);

  useEffect(() => {
    dispatch(navbarOperations.setActive('logout'));
  }, [dispatch]);

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
