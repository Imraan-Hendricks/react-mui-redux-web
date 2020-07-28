import actions from './backdrop-actions';

const reset = () => (dispatch) => dispatch(actions.reset());

const setIsOpen = (open, openCounter) => (dispatch) => {
  dispatch(actions.setIsOpen(open, openCounter));
};

export default { reset, setIsOpen };
