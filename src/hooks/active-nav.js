import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import navbarOperations from '../components/navbar/redux/navbar-operations';

const ActiveNav = (active) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navbarOperations.setActive(active));
  }, [dispatch, active]);
};

export default ActiveNav;
