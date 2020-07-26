import actions from './navbar-actions';

const reset = () => (dispatch) => dispatch(actions.reset());

const setActive = (active) => (dispatch) => dispatch(actions.setActive(active));

export default {
  reset,
  setActive,
};
