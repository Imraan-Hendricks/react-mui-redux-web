import { combineReducers } from 'redux';
import modelReducer from './_root-model';

const appReducer = combineReducers({
  model: modelReducer,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
