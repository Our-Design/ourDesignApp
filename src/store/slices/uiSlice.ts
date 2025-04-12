import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UIState {
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: UIState = {
  loading: false,
  error: null,
  success: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.loading = false;
    },
    setSuccess(state, action: PayloadAction<string | null>) {
      state.success = action.payload;
      state.loading = false;
    },
    resetUI(state) {
      state.loading = false;
      state.error = null;
      state.success = null;
    },
  },
});

export const {setLoading, setError, setSuccess, resetUI} = uiSlice.actions;
export default uiSlice.reducer;
