import { combineReducers } from 'redux';
import types from './_root-types';
import modelReducer from './_root-model';

const appReducer = combineReducers({
  model: modelReducer,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case types.RESET_APP:
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
