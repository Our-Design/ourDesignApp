// src/components/AppStateListener.tsx
import {useEffect, useRef} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import {useDispatch} from 'react-redux';
import {setAppState} from '../../store/slices/appStateSlice';
import {AppDispatch} from '../../store';

const AppStateListener = () => {
  const appState = useRef(AppState.currentState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const onChange = (nextAppState: AppStateStatus) => {
      if (appState.current !== nextAppState) {
        dispatch(setAppState(nextAppState));
        appState.current = nextAppState;
      }
    };

    const subscription = AppState.addEventListener('change', onChange);
    return () => subscription.remove();
  }, [dispatch]);

  return null; // Invisible utility component
};

export default AppStateListener;
