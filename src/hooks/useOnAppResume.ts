// src/hooks/useOnAppResume.ts
import {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

export const useOnAppResume = (callback: () => void) => {
  const appState = useSelector((state: RootState) => state.appState.state);
  const previousAppState = useRef(appState);

  useEffect(() => {
    if (previousAppState.current !== 'active' && appState === 'active') {
      callback();
    }

    previousAppState.current = appState;
  }, [appState, callback]);
};
