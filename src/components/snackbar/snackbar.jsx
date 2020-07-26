import React, { Fragment, useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import snackbarOperations from './redux/snackbar-operations';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Message from './message/message';
import { useSnackbarStyles } from './snackbar-styles';

const SimpleSnackbar = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const { notifications, wait } = useSelector(
    (state) => state.components.snackbar.state,
    shallowEqual
  );

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

    dispatch(snackbarOperations.setWait(true));
    setOpen(false);

    setTimeout(() => {
      if (notifications.length > 0)
        dispatch(snackbarOperations.removeNotification());
      dispatch(snackbarOperations.setWait(false));
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
