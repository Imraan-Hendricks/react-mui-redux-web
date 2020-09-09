import { combineReducers } from 'redux';
import stateReducer from './backdrop-state';

const combinedReducers = combineReducers({
  state: stateReducer,
});

const backdropReducer = (state, action) => {
  switch (action.type) {
    default:
      return combinedReducers(state, action);
  }
};

export default backdropReducer;
