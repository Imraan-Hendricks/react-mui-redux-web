import rootTypes from '../../../redux/root-types';
import types from './auth-types';

const initialState = {
  _id: undefined,
  displayName: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
};

const authReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.SET_USER:
      const { _id, displayName, firstName, lastName, email } = action.payload;
      return { ...state, _id, displayName, firstName, lastName, email };
    case types.RESET:
    case rootTypes.RESET_APP:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
