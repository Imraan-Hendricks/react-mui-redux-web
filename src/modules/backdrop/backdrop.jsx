import React from 'react';
import useBackdrop from './redux/backdrop';

import { Backdrop as BDrop, CircularProgress } from '@material-ui/core';
import { useBackdropStyles } from './backdrop-styles';

const Backdrop = () => {
  const { isOpen } = useBackdrop();

  const classes = useBackdropStyles();

  return (
    <BDrop className={classes.backdrop} open={isOpen}>
      <CircularProgress color='inherit' />
    </BDrop>
  );
};

export default Backdrop;
