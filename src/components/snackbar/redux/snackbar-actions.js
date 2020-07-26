import types from './snackbar-types';

const pushNotification = (notification, notifications) => ({
  type: types.PUSH_NOTIFICATION,
  payload: [...notifications, notification],
});

const removeNotification = (notifications) => ({
  type: types.PUSH_NOTIFICATION,
  payload: notifications.filter((notification, index) => index > 0),
});

const reset = () => ({
  type: types.RESET,
});

const setWait = (wait) => ({
  type: types.SET_WAIT,
  payload: wait,
});

export default { pushNotification, removeNotification, reset, setWait };
