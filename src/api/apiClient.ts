import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {handleLogout} from '../utils/logoutHandler';

// Replace this with your actual API URL
const BASE_URL = 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// OPTIONAL: Add interceptor to include token in headers
apiClient.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token'); // Replace with token from Redux or localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// OPTIONAL: Add global error handling
apiClient.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  async error => {
    console.log('API Error:', error?.response || error?.message);
    if (error?.response?.status === 401) {
      console.log('Unauthorized! Logging out...');
      await handleLogout();
    }
    return Promise.reject(error);
  },
);

export default apiClient;
