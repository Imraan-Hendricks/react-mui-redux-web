import actions from './backdrop-actions';

const reset = () => (dispatch) => dispatch(actions.reset());

const setIsOpen = (open) => (dispatch, getState) => {
  const openCounter = getState().components.backdrop.state.openCounter;
  dispatch(actions.setIsOpen(open, openCounter));
};

export default { reset, setIsOpen };
