// import { AuthService } from '../services/authService';
// import { ToasterService } from './toasterService';
// import { api } from '../services/apiService';
// import {refreshTokenDTO} from '../models/RefreshTokenDTO'
// // Add a request interceptor to add the Bearer token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('jwtToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// // Add a response interceptor to refresh the token if expired
// api.interceptors.response.use((response) => {
//   return response;
// }, async (error) => {
//   const originalRequest = error.config;
//   if (error.response.status === 401 && !originalRequest._retry) {
//     originalRequest._retry = true;
//     try {
//       const refreshToken = AuthService.getRefreshToken();
//       const refreshTokenExpires = AuthService.getRefreshTokenExpiry();
//       const userName = AuthService.getCurrentUser();
//       const DTO =  refreshTokenDTO(userName, refreshToken)
//       const response = await AuthService.refresh(DTO);
//       AuthService.storeTokens(response);
//       originalRequest.headers.Authorization = `Bearer ${response.data.jwtToken}`;
//       return api(originalRequest);
//     } catch (err) {
//       ToasterService.error('Session expired, please log in again.');
//       // Optionally, redirect to login page
//     }
//   }
//   return Promise.reject(error);
// });

// export { api };
