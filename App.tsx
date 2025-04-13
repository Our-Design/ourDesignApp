import { Provider } from 'react-redux';
import { store } from './src/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppProvider from './src/AppProvider';
import UILayer from './src/components/UILayer';
import Toast from 'react-native-toast-message';
import CustomStatusBar from './src/components/CustomStatusBar';
import { Colors } from './src/styles/vars';



export default function App() {

  return (
      <SafeAreaProvider>
        <CustomStatusBar backgroundColor={Colors.headerBackground}/>
        <Provider store={store}>
        <UILayer />
        <AppProvider/>
        </Provider>
        <Toast
          topOffset={50}
          visibilityTime={3000}
          position="top"
        />
      </SafeAreaProvider>
  );
}
