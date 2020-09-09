import React, { Fragment, useEffect, useState } from 'react';
import useSnackbar from './redux/snackbar';

import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Message from './message/message';
import { useSnackbarStyles } from './snackbar-styles';

const SimpleSnackbar = () => {
  const [open, setOpen] = useState(false);

  const { notifications, wait, removeNotification, setWait } = useSnackbar();

  useEffect(() => {
    if (notifications.length > 0 && !wait) setOpen(true);
  }, [notifications.length, wait]);

  const getMsg = () => {
    if (notifications.length === 0) return undefined;
    return notifications[0].msg;
  };

  const getType = () => {
    if (notifications.length === 0) return undefined;
    return notifications[0].type;
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setWait(true);
    setOpen(false);

    setTimeout(() => {
      if (notifications.length > 0) removeNotification();
      setWait(false);
    }, 1000);
  };

  const classes = useSnackbarStyles({ type: getType() });

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={<Message msg={getMsg()} type={getType()} />}
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
