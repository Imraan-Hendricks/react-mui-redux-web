import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import snackbarOperations from './snackbar-operations';

const Snackbar = () => {
  const { notifications, wait } = useSelector(
    (state) => state.components.snackbar.state,
    shallowEqual
  );

  const dispatch = useDispatch();

  const pushNotification = (notification) =>
    dispatch(
      snackbarOperations.pushNotification(notification, notifications, wait)
    );

  const removeNotification = () =>
    dispatch(snackbarOperations.removeNotification(notifications));

  const reset = () => dispatch(snackbarOperations.reset());

  const setWait = (wait) => dispatch(snackbarOperations.setWait(wait));

  return {
    notifications,
    wait,
    pushNotification,
    removeNotification,
    reset,
    setWait,
  };
};

export default Snackbar;
