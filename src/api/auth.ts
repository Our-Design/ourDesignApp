import apiClient from './apiClient';

export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/login', {email, password});
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
  email: string;
  otp: string;
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

// OTP-based authentication endpoints
export const sendOTP = async (email: string) => {
  try {
    const response = await apiClient.post('/auth/send-otp', {email});
    return response.data;
  } catch (err: any) {
    const message =
      err?.response?.data?.message || err?.message || 'Failed to send OTP';
    throw new Error(message);
  }
};

// Remove verifyOTP since it doesn't exist - OTP verification is done during registration

export const resendOTP = async (email: string) => {
  try {
    const response = await apiClient.post('/auth/resend-verification', {email});
    return response.data;
  } catch (err: any) {
    const message =
      err?.response?.data?.message || err?.message || 'Failed to resend OTP';
    throw new Error(message);
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await apiClient.post('/auth/forgot-password', {email});
    return response.data;
  } catch (err: any) {
    const message =
      err?.response?.data?.message ||
      err?.message ||
      'Failed to send reset email';
    throw new Error(message);
  }
};

export const resetPassword = async (
  oldPassword: string,
  newPassword: string,
  confirmPassword: string,
) => {
  try {
    const response = await apiClient.post('/auth/reset-password', {
      oldPassword,
      newPassword,
      confirmPassword,
    });
    return response.data;
  } catch (err: any) {
    const message =
      err?.response?.data?.message || err?.message || 'Password reset failed';
    throw new Error(message);
  }
};

export const deleteAccount = async () => {
  try {
    const response = await apiClient.delete('/auth/delete-me');
    return response.data;
  } catch (err: any) {
    const message =
      err?.response?.data?.message ||
      err?.message ||
      'Failed to delete account';
    throw new Error(message);
  }
};
