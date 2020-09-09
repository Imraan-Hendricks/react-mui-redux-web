import actions from './snackbar-actions';

const pushNotification = (notification, notifications, wait) => (
  dispatch,
  getState
) => {
  if (!wait)
    return dispatch(actions.pushNotification(notification, notifications));

  setTimeout(() => {
    const notificationsUpdate = getState().modules.snackbar.state.notifications;
    dispatch(actions.pushNotification(notification, notificationsUpdate));
  }, 1000);
};

const removeNotification = (notifications) => (dispatch) =>
  dispatch(actions.removeNotification(notifications));

const reset = () => (dispatch) => dispatch(actions.reset());

const setWait = (wait) => (dispatch) => dispatch(actions.setWait(wait));

export default { pushNotification, removeNotification, reset, setWait };
