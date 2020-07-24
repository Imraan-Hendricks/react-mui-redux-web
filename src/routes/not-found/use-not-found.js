import useActiveNav from '../../hooks/active-nav';
import useRedirect from '../../hooks/redirect';

const NotFound = () => {
  useActiveNav('notFound');
  const { setUrl } = useRedirect();

  return { setUrl };
};

export default NotFound;
