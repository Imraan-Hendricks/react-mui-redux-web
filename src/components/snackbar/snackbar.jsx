import React, { Fragment } from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Message from './message/message';
import useSnackbar from './use-snackbar';
import { useSnackbarStyles } from './snackbar-styles';

const SimpleSnackbar = () => {
  const { msg, type, open, handleClose } = useSnackbar();

  const classes = useSnackbarStyles({ type });

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={<Message msg={msg} type={type} />}
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
            classes={{
              root: classes.iconButton,
            }}
            onClick={handleClose}>
            <CloseIcon fontSize='small' />
          </IconButton>
        </Fragment>
      }
    />
  );
};

export default SimpleSnackbar;
