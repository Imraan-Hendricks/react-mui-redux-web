import rootTypes from '../../../redux/root-types';
import types from './auth-types';

const initialState = {
  _id: undefined,
  displayName: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_USER:
      let user = action.payload;
      return {
        ...state,
        _id: user._id,
        displayName: user.displayName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
    case types.RESET:
    case rootTypes.RESET_APP:
      return initialState;
    default:
      return state;
  }
}
