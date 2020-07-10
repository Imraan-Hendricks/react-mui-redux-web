import React, { useEffect } from 'react';
import navbarOperations from '../../components/navbar/redux/navbar-operations';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navbarOperations.setActive('home'));
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
