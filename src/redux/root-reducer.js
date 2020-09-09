import { combineReducers } from 'redux';
import modulesReducer from '../modules/modules-reducer';
import stateReducer from './root-state';

const appReducer = combineReducers({
  modules: modulesReducer,
  state: stateReducer,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
