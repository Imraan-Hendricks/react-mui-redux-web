import rootTypes from '../../../redux/root-types';
import types from './snackbar-types';

const initialState = {
  notifications: [],
  wait: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.PUSH_NOTIFICATION:
      return {
        ...state,
        notifications: action.payload,
      };
    case types.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: action.payload,
      };
    case types.SET_WAIT:
      return {
        ...state,
        wait: action.payload,
      };
    case types.RESET:
    case rootTypes.RESET_APP:
      return initialState;
    default:
      return state;
  }
}
