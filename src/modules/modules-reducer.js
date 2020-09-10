import { combineReducers } from 'redux';
import authReducer from './auth/redux/auth-reducer';
import backdropReducer from './backdrop/redux/backdrop-reducer';
import navbarReducer from './navbar/redux/navbar-reducer';
import snackbarReducer from './snackbar/redux/snackbar-reducer';

const modulesReducer = combineReducers({
  auth: authReducer,
  backdrop: backdropReducer,
  navbar: navbarReducer,
  snackbar: snackbarReducer,
});

export default modulesReducer;
