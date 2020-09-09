import types from './navbar-types';

const reset = () => ({
  type: types.RESET,
});

const setActive = (active) => ({
  type: types.SET_ACTIVE,
  payload: active,
});

export default { reset, setActive };
