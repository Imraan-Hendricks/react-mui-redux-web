import { handleFetch } from './api-helpers';

const getAuthInfo = () =>
  new Promise((resolve, reject) =>
    handleFetch('/api/auth')
      .then((authInfo) => resolve(authInfo))
      .catch((err) => reject(err))
  );

const logout = () =>
  new Promise((resolve, reject) =>
    handleFetch('/api/auth/logout')
      .then((authInfo) => resolve(authInfo))
      .catch((err) => reject(err))
  );

export { getAuthInfo, logout };
