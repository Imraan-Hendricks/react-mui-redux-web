import useActiveNav from '../../hooks/active-nav';
import useAuthorization from '../../hooks/authorization';

const Logout = () => {
  useActiveNav('logout');
  useAuthorization('authenticated', '/');
};

export default Logout;
