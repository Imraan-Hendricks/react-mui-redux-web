import { useHistory } from 'react-router-dom';
import useActiveNav from '../../hooks/active-nav';

const NotFound = () => {
  const history = useHistory();

  useActiveNav('notFound');

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
