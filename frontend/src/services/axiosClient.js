import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BMPM_API,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token')
    const auth = token ? `Bearer ${token}` : '';
    config.headers['Authorization'] = auth;
    return config;
  },
  (error) => Promise.reject(error),
);