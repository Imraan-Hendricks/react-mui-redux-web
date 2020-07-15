import rootTypes from '../../../redux/root-types';
import types from './backdrop-types';

const initialState = {
  isOpen: false,
  openCounter: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload.isOpen,
        openCounter: action.payload.openCounter,
      };
    case types.RESET:
    case rootTypes.RESET_APP:
      return initialState;
    default:
      return state;
  }
}
