import { combineReducers } from 'redux';
import componentsReducer from '../components/components-reducer';
import stateReducer from './root-state';

const appReducer = combineReducers({
  components: componentsReducer,
  state: stateReducer,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
