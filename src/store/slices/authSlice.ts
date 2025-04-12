import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login as loginAPI, register as registerAPI} from '../../api/auth';
import {setLoading, setError, setSuccess} from './uiSlice';

interface AuthState {
  token: string | null;
  user: any | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({phone, password}: {phone: string; password: string}, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const data = await loginAPI(phone, password);
      await AsyncStorage.setItem('token', data.accessToken);
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
    {name, phone, password}: {name: string; phone: string; password: string},
    {dispatch},
  ) => {
    try {
      dispatch(setLoading(true));
      const data = await registerAPI({name, phone, password});
      await AsyncStorage.setItem('token', data.accessToken);
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

export const logout = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.removeItem('token');
});

export const setTokenFromStorage = (token: string) => ({
  type: 'auth/setToken',
  payload: token,
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
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
      })
      .addCase(logout.fulfilled, state => {
        state.token = null;
        state.user = null;
      });
  },
});

export const {setToken} = authSlice.actions;
export default authSlice.reducer;
