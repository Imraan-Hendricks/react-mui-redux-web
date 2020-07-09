import { combineReducers } from 'redux';
import navbarReducer from './navbar/_navbar-reducer';

const combinedReducer = combineReducers({
  navbar: navbarReducer,
});

const componentsReducer = (state, action) => {
  switch (action.type) {
    default:
      return combinedReducer(state, action);
  }
};

export default componentsReducer;
