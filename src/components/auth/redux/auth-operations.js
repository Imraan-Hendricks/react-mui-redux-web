import actions from './auth-actions';

const reset = () => (dispatch) => {
  dispatch(actions.reset());
};

const setUser = (user) => (dispatch) => {
  dispatch(actions.setUser(user));
};

export default { reset, setUser };
