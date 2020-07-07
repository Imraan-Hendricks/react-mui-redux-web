import persist from './_root-persist';
import types from './_root-types';

const initialState = {
  ex1: 'data',
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_APP:
      return initialState;
    default:
      return state;
  }
};

export default persist(stateReducer);
