import apiClient from './apiClient';

export const login = async (phone: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/login', {phone, password});
    return response.data;
  } catch (err: any) {
    const message =
      err?.response?.data?.message || err?.message || 'Login failed';
    throw new Error(message);
  }
};

export const register = async (payload: {
  phone: string;
  password: string;
  name: string;
}) => {
  try {
    const response = await apiClient.post('/auth/register', payload);
    return response.data;
  } catch (err: any) {
    const message =
      err?.response?.data?.message || err?.message || 'Registration failed';
    throw new Error(message);
  }
};
