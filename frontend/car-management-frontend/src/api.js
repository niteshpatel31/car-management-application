import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Use your backend URL here
});

// Automatically attach JWT token if present
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
