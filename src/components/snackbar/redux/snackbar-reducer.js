import { combineReducers } from 'redux';
import stateReducer from './snackbar-state';

const combinedReducers = combineReducers({
  state: stateReducer,
});

const snackbarReducer = (state, action) => {
  switch (action.type) {
    default:
      return combinedReducers(state, action);
  }
};

export default snackbarReducer;
