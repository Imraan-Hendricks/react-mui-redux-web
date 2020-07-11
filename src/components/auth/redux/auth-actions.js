import types from './auth-types';

const reset = () => {
  return {
    type: types.RESET,
  };
};

const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};

export default { reset, setUser };
