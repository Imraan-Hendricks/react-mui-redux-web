import { combineReducers } from 'redux';
import stateReducer from './_root-state';

const appReducer = combineReducers({
  state: stateReducer,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
