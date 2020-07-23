import useActiveNav from '../../hooks/active-nav';
import useAuthorization from '../../hooks/authorization';

const Login = () => {
  useActiveNav('login');
  useAuthorization('notAuthenticated', '/');
};

export default Login;
