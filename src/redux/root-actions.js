import types from './root-types';

const resetApp = () => {
  return {
    type: types.RESET_APP,
  };
};

export default { resetApp };
