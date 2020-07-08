import { useRouteMatch } from 'react-router-dom';

const Routes = () => {
  const home = useRouteMatch({
    path: '/',
    exact: true,
    strict: true,
    sensitive: false,
  });

  return { home };
};

export default Routes;
