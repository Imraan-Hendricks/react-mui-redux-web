import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import navbarOperations from '../../components/navbar/redux/navbar-operations';

const NotFound = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(navbarOperations.setActive('notFound'));
  }, [dispatch]);

  const redirect = (url) => {
    if (url && history) {
      if (url === '/back') {
        history.goBack();
        return;
      }
      history.push(url);
    }
  };

  return { redirect };
};

export default NotFound;
