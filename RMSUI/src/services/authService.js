import axios from 'axios';
// Creating a seperate axios client to seperate this class from interceptor
const API_BASE_URL = 'https://localhost:5000/api';
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const AuthService = {
  register: async (registerDTO) => {
    return await api.post('/Auth/register', registerDTO);
  },
  login: async (loginDTO) => {
    return await api.post('/Auth/login', loginDTO);
  },
  refresh: async (refreshTokenDTO) => {
    return await api.post('/Auth/refresh', refreshTokenDTO);
  },
  forgetPassword: async (forgetPasswordDTO) => {
    return await api.post('/Auth/forgetPassword', forgetPasswordDTO);
  },
  generateResetToken: async (forgetPasswordDTO) => {
    return await api.post('/Auth/generateResetToken', forgetPasswordDTO);
  },
  storeTokens: (response) => {
    const { jwtToken, refreshToken, refreshTokenExpires, userName } = response.data;
    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('refreshTokenExpires', refreshTokenExpires);
    localStorage.setItem('userName', userName);
  },
  getRefreshToken: () => {
    return localStorage.getItem('refreshToken');
  },
  getRefreshTokenExpiry: () => {
    return localStorage.getItem('refreshTokenExpires');
  },
  getJwtToken: () => {
    return localStorage.getItem('jwtToken');
  }, 
  getCurrentUser: () => {
    return localStorage.getItem('userName');
  }
};
