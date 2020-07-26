import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const Auth = () => {
  const { _id, displayName, firstName, lastName, email } = useSelector(
    (state) => state.components.auth.state,
    shallowEqual
  );

  if (!_id) {
    return (
      <div>
        <h1>no authenticated user</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>User Information:</h1>
      <ul>
        <li>_id: {_id}</li>
        <li>displayName: {displayName}</li>
        <li>first name: {firstName}</li>
        <li>last name: {lastName}</li>
        <li>email: {email}</li>
      </ul>
    </div>
  );
};

export default Auth;
