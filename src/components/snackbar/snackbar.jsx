import React, { Fragment } from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useSnackbar from './use-snackbar';
import { useSnackbarStyles } from './snackbar-styles';

const SimpleSnackbar = () => {
  const { msg, open, handleClose } = useSnackbar();

  const classes = useSnackbarStyles();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={msg}
      ContentProps={{
        classes: {
          root: classes.snackbar,
        },
      }}
      action={
        <Fragment>
          <IconButton
            size='small'
            aria-label='close'
            color='primary'
            onClick={handleClose}>
            <CloseIcon fontSize='small' />
          </IconButton>
        </Fragment>
      }
    />
  );
};

export default SimpleSnackbar;
