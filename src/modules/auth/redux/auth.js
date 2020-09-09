import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import authOperations from './auth-operations';

const Auth = () => {
  const { _id, displayName, firstName, lastName, email } = useSelector(
    (state) => state.modules.auth.state,
    shallowEqual
  );

  const dispatch = useDispatch();

  const reset = () => dispatch(authOperations.reset());

  const setUser = (user) => dispatch(authOperations.setUser(user));

  return { _id, displayName, firstName, lastName, email, reset, setUser };
};

export default Auth;
