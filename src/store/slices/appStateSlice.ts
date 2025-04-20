// src/store/slices/appStateSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState, AppStateStatus} from 'react-native';

interface AppStateSlice {
  state: AppStateStatus;
}

const initialState: AppStateSlice = {
  state: AppState.currentState,
};

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setAppState(state, action: PayloadAction<AppStateStatus>) {
      state.state = action.payload;
    },
  },
});

export const {setAppState} = appStateSlice.actions;
export default appStateSlice.reducer;
