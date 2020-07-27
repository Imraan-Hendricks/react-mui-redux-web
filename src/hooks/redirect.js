import { useHistory } from 'react-router-dom';

const Redirect = () => {
  const history = useHistory();

  const redirect = (url) => {
    if (url) {
      if (url === '/back') return history.goBack();
      history.push(url);
    }
  };

  return redirect;
};

export default Redirect;
