import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  login as loginAPI,
  register as registerAPI,
  sendOTP as sendOTPAPI,
  resendOTP as resendOTPAPI,
  forgotPassword as forgotPasswordAPI,
  resetPassword as resetPasswordAPI,
} from '../../api/auth';
import {setLoading, setError, setSuccess} from './uiSlice';

interface UserState {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  role: string;
  walletBalance: number;
  address: string | null;
  createdAt: string;
}

type RegistrationStep = 'email' | 'details' | 'complete';
type ResetPasswordStep = 'email' | 'password' | 'complete';

interface AuthState {
  token: string | null;
  user: UserState | null;
  // Registration flow states
  tempEmail: string | null;
  otpSent: boolean;
  registrationStep: RegistrationStep;
  resetPasswordStep: ResetPasswordStep;
}

const initialState: AuthState = {
  token: null,
  user: null,
  tempEmail: null,
  otpSent: false,
  registrationStep: 'email',
  resetPasswordStep: 'email',
};

export const login = createAsyncThunk(
  'auth/login',
  async ({email, password}: {email: string; password: string}, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const data = await loginAPI(email, password);
      await AsyncStorage.setItem('token', data.accessToken);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      dispatch(setSuccess('Login successful'));
      return data;
    } catch (err: any) {
      dispatch(setError(err.message || 'Login failed'));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (
    {
      name,
      phone,
      email,
      password,
      otp,
    }: {
      name: string;
      phone: string;
      email: string;
      password: string;
      otp: string;
    },
    {dispatch},
  ) => {
    try {
      dispatch(setLoading(true));
      const data = await registerAPI({name, phone, email, password, otp});
      await AsyncStorage.setItem('token', data.accessToken);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      dispatch(setSuccess('Registration successful'));
      return data;
    } catch (err: any) {
      dispatch(setError(err.message || 'Registration failed'));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  },
);

// OTP and registration thunks
export const sendOTP = createAsyncThunk(
  'auth/sendOTP',
  async (email: string, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const data = await sendOTPAPI(email);
      dispatch(setSuccess('OTP sent successfully'));
      return data;
    } catch (err: any) {
      dispatch(setError(err.message || 'Failed to send OTP'));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const resendOTP = createAsyncThunk(
  'auth/resendOTP',
  async (email: string, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const data = await resendOTPAPI(email);
      dispatch(setSuccess('OTP resent successfully'));
      return data;
    } catch (err: any) {
      dispatch(setError(err.message || 'Failed to resend OTP'));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const data = await forgotPasswordAPI(email);
      dispatch(setSuccess('Reset link sent to your email'));
      return data;
    } catch (err: any) {
      dispatch(setError(err.message || 'Failed to send reset email'));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (
    {
      oldPassword,
      newPassword,
      confirmPassword,
    }: {oldPassword: string; newPassword: string; confirmPassword: string},
    {dispatch},
  ) => {
    try {
      dispatch(setLoading(true));
      const data = await resetPasswordAPI(
        oldPassword,
        newPassword,
        confirmPassword,
      );
      dispatch(setSuccess('Password reset successfully'));
      return data;
    } catch (err: any) {
      dispatch(setError(err.message || 'Password reset failed'));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('user');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUser(state, action: PayloadAction<UserState>) {
      state.user = action.payload;
    },
    setTempEmail(state, action: PayloadAction<string>) {
      state.tempEmail = action.payload;
    },
    setRegistrationStep(state, action: PayloadAction<RegistrationStep>) {
      state.registrationStep = action.payload;
    },
    setResetPasswordStep(state, action: PayloadAction<ResetPasswordStep>) {
      state.resetPasswordStep = action.payload;
    },
    resetAuthFlow(state) {
      state.tempEmail = null;
      state.otpSent = false;
      state.registrationStep = 'email';
      state.resetPasswordStep = 'email';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        state.registrationStep = 'complete';
      })
      .addCase(logout.fulfilled, state => {
        state.token = null;
        state.user = null;
        state.tempEmail = null;
        state.otpSent = false;
        state.registrationStep = 'email';
        state.resetPasswordStep = 'email';
      })
      .addCase(sendOTP.fulfilled, state => {
        state.otpSent = true;
        state.registrationStep = 'details';
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.resetPasswordStep = 'password';
      })
      .addCase(resetPassword.fulfilled, state => {
        state.resetPasswordStep = 'complete';
        state.otpSent = false;
        state.tempEmail = null;
      });
  },
});

export const {
  setToken,
  setUser,
  setTempEmail,
  setRegistrationStep,
  setResetPasswordStep,
  resetAuthFlow,
} = authSlice.actions;
export default authSlice.reducer;
