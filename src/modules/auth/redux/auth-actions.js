import types from './auth-types';

const reset = () => ({
  type: types.RESET,
});

const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export default { reset, setUser };
