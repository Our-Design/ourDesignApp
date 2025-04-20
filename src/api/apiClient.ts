import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {handleLogout} from '../utils/logoutHandler';
import {BASE_URL} from 'react-native-dotenv';

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
    return response;
  },
  async error => {
    if (error?.response?.status === 401) {
      await handleLogout();
    }
    return Promise.reject(error);
  },
);

export default apiClient;
