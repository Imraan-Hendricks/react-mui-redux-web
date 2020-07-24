import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Redirect = () => {
  const history = useHistory();

  const [url, setUrl] = useState(undefined);

  useEffect(() => {
    if (url) {
      if (url === '/back') history.goBack();
      else history.push(url);
      setUrl(undefined);
    }
  }, [history, url]);

  return { setUrl };
};

export default Redirect;
