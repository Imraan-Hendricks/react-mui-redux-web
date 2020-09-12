import { handleFetch } from './api-helpers';

const getAuthInfo = () => handleFetch('/api/auth');

const logout = () => handleFetch('/api/auth/logout');

export { getAuthInfo, logout };
