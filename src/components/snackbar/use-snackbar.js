import { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import snackbarOperations from './redux/snackbar-operations';

const Snackbar = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const { notifications, wait } = useSelector(
    (state) => state.components.snackbar.state,
    shallowEqual
  );

  useEffect(() => {
    if (notifications.length > 0 && !wait) {
      setOpen(true);
    }
  }, [notifications.length, wait]);

  const getMsg = () => {
    if (notifications.length === 0) {
      return undefined;
    }
    return notifications[0].msg;
  };

  const getType = () => {
    if (notifications.length === 0) {
      return undefined;
    }
    return notifications[0].type;
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(snackbarOperations.setWait(true));
    setOpen(false);

    setTimeout(() => {
      if (notifications.length > 0) {
        dispatch(snackbarOperations.removeNotification());
      }
      dispatch(snackbarOperations.setWait(false));
    }, 1000);
  };

  return {
    msg: getMsg(),
    type: getType(),
    open,
    handleClose,
  };
};

export default Snackbar;
