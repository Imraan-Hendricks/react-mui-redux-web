import rootTypes from '../../../redux/root-types';
import types from './backdrop-types';

const initialState = {
  isOpen: false,
  openCounter: 0,
};

const backdropReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.SET_IS_OPEN:
      const { isOpen, openCounter } = action.payload;
      return { ...state, isOpen, openCounter };
    case types.RESET:
    case rootTypes.RESET_APP:
      return initialState;
    default:
      return state;
  }
};

export default backdropReducer;
