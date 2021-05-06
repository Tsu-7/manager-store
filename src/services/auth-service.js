import request from 'src/utils/fetch';
import request_kb from 'src/utils/fetch_kb';

// export const loginWithEmail = (data) =>
//   request.post('/mobile-builder/v1/login', data);

export const loginWithEmail = (data) => request_kb.post('/login', data);

export const getProfile = (token) => request_kb.get('/me', {}, token);

export const registerEmail = (data) =>
  request.post('/mobile-builder/v1/register', data);

export const settingProfile = (data, token) =>
  request.post('/mobile-builder/v1/wcfm-profile-settings', data, 'POST', token);

export const forgotPassword = (data) =>
  request.post('/mobile-builder/v1/lost-password', JSON.stringify(data));

export const getCustomer = (customerId) =>
  request.get(`/wc/v3/customers/${customerId}`);
