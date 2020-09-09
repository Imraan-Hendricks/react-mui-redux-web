import { combineReducers } from 'redux';
import stateReducer from './navbar-state';

const combinedReducer = combineReducers({
  state: stateReducer,
});

const navbarReducer = (state, action) => {
  switch (action.type) {
    default:
      return combinedReducer(state, action);
  }
};

export default navbarReducer;
