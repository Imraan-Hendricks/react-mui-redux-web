import rootTypes from '../../../redux/root-types';
import types from './navbar-types';

const initialState = {
  active: null,
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case types.RESET:
    case rootTypes.RESET_APP:
      return initialState;
    default:
      return state;
  }
};

export default stateReducer;
