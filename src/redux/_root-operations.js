import actions from './_root-actions';

const resetApp = () => (dispatch) => {
  dispatch(actions.resetApp());
};

export default { resetApp };
