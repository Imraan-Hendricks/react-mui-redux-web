import actions from './snackbar-actions';

const pushNotification = (notification) => (dispatch, getState) => {
  const wait = getState().components.snackbar.state.wait;
  if (!wait) {
    const notifications = getState().components.snackbar.state.notifications;
    return dispatch(actions.pushNotification(notification, notifications));
  }
  setTimeout(() => {
    const notifications = getState().components.snackbar.state.notifications;
    dispatch(actions.pushNotification(notification, notifications));
  }, 1000);
};

const removeNotification = () => (dispatch, getState) => {
  const notifications = getState().components.snackbar.state.notifications;
  dispatch(actions.removeNotification(notifications));
};

const reset = () => (dispatch) => {
  dispatch(actions.reset());
};

const setWait = (wait) => (dispatch) => {
  dispatch(actions.setWait(wait));
};

export default { pushNotification, removeNotification, reset, setWait };
