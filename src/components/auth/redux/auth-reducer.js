import { combineReducers } from 'redux';
import stateReducer from './auth-state';

const combinedReducers = combineReducers({
  state: stateReducer,
});

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return combinedReducers(state, action);
  }
};

export default authReducer;
