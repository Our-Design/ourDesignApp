import axios from 'axios';

// Replace this with your actual API URL
const BASE_URL = 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// OPTIONAL: Add interceptor to include token in headers
apiClient.interceptors.request.use(
  async config => {
    const token = ''; // Replace with token from Redux or localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// OPTIONAL: Add global error handling
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.log('API Error:', error?.response || error?.message);
    return Promise.reject(error);
  },
);

export default apiClient;
