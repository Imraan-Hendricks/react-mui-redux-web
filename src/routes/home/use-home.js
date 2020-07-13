import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import navbarOperations from '../../components/navbar/redux/navbar-operations';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navbarOperations.setActive('home'));
  }, [dispatch]);

  return;
};

export default Home;
