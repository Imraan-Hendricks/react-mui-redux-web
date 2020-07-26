import React from 'react';
import { useSelector } from 'react-redux';
import { Backdrop as BDrop, CircularProgress } from '@material-ui/core';
import { useBackdropStyles } from './backdrop-styles';

const Backdrop = () => {
  const isOpen = useSelector((state) => state.components.backdrop.state.isOpen);

  const classes = useBackdropStyles();

  return (
    <BDrop className={classes.backdrop} open={isOpen}>
      <CircularProgress color='inherit' />
    </BDrop>
  );
};

export default Backdrop;
