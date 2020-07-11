import { shallowEqual, useSelector } from 'react-redux';

const Auth = () => {
  const state = useSelector(
    (state) => state.components.auth.state,
    shallowEqual
  );

  return {
    _id: state._id,
    displayName: state.displayName,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
  };
};

export default Auth;
