import React from 'react';
import NotFoundComp from '../../components/not-found/not-found';
import useActiveNav from '../../hooks/active-nav';

const NotFound = () => {
  useActiveNav('notFound');

  return (
    <div>
      <NotFoundComp />
    </div>
  );
};

export default NotFound;
