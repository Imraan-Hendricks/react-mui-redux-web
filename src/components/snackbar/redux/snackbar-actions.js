import types from './snackbar-types';

const pushNotification = (notification, notifications) => {
  const notificationsUpdate = [...notifications, notification];

  return {
    type: types.PUSH_NOTIFICATION,
    payload: notificationsUpdate,
  };
};

const removeNotification = (notifications) => {
  const notificationsUpdate = notifications.filter((notification, index) => {
    return index > 0;
  });

  return {
    type: types.PUSH_NOTIFICATION,
    payload: notificationsUpdate,
  };
};

const reset = () => {
  return {
    type: types.RESET,
  };
};

const setWait = (wait) => {
  return {
    type: types.SET_WAIT,
    payload: wait,
  };
};

export default { pushNotification, removeNotification, reset, setWait };
