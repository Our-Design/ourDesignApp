import {Provider} from 'react-redux';
import {store} from './src/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppProvider from './src/AppProvider';
import UILayer from './src/components/UILayer';
import Toast from 'react-native-toast-message';
import {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <UILayer />
        <AppProvider />
      </Provider>
      <Toast topOffset={50} visibilityTime={3000} position="top" />
    </SafeAreaProvider>
  );
}
