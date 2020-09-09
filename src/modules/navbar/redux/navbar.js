import { useDispatch, useSelector } from 'react-redux';
import navbarOperations from './navbar-operations';

const Navbar = () => {
  const active = useSelector((state) => state.modules.navbar.state.active);

  const dispatch = useDispatch();

  const reset = () => dispatch(navbarOperations.reset());

  const setActive = (active) => dispatch(navbarOperations.setActive(active));

  return { active, reset, setActive };
};

export default Navbar;
