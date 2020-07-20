import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const history = useHistory();

  const userId = useSelector((state) => state.components.auth.state._id);

  const isAuthenticated = () => {
    if (!userId) return false;
    return true;
  };

  const redirect = (url) => {
    if (url && history) {
      if (url === '/back') {
        history.goBack();
        return;
      }
      history.push(url);
    }
  };

  const home = { id: 'home', name: 'home', onClick: () => redirect('/') };

  const contact = {
    id: 'contact',
    name: 'contact',
    onClick: () => redirect('/contact'),
  };

  const login = {
    id: 'login',
    name: 'login',
    onClick: () => redirect('/login'),
  };

  const management = {
    id: 'management',
    name: 'management',
    dropdownItems: [
      {
        id: 'admin',
        name: 'admin',
        onClick: () => redirect('/management/admin'),
      },
      {
        id: 'roles',
        name: 'roles',
        onClick: () => redirect('/management/roles'),
      },
    ],
  };

  const logout = {
    id: 'logout',
    name: 'logout',
    onClick: () => redirect('/logout'),
  };

  const authLinks = [home, contact, logout, management];
  const links = [home, contact, login];

  const getLinks = () => {
    if (isAuthenticated()) {
      return authLinks;
    }
    return links;
  };

  return {
    links: getLinks(),
  };
};

export default Navbar;
