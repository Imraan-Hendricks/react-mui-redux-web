import { handleFetch } from './api-helpers';

const getAuthInfo = () => {
  return new Promise((resolve, reject) => {
    handleFetch('/api/auth')
      .then((authInfo) => {
        resolve(authInfo);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getAuthInfo };
