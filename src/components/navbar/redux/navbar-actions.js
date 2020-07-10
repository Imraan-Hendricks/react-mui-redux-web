import types from './navbar-types';

const reset = () => {
  return {
    type: types.RESET,
  };
};

const setActive = (active) => {
  return {
    type: types.SET_ACTIVE,
    payload: active,
  };
};

export default {
  reset,
  setActive,
};
