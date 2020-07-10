import actions from './root-actions';

const resetApp = () => (dispatch) => {
  dispatch(actions.resetApp());
};

export default { resetApp };
