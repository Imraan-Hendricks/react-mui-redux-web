import actions from './_navbar-actions';

const reset = () => (dispatch) => {
  dispatch(actions.reset());
};

const setActive = (active) => (dispatch) => {
  dispatch(actions.setActive(active));
};

export default {
  reset,
  setActive,
};
