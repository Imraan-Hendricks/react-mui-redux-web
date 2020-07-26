import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Redirect = () => {
  const history = useHistory();

  const redirect = useCallback(
    (url) => {
      if (url) {
        if (url === '/back') return history.goBack();
        history.push(url);
      }
    },
    [history]
  );

  return [redirect];
};

export default Redirect;
