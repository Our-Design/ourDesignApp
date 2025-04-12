import {  useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setTokenFromStorage } from './store/slices/authSlice';
import AppNavigator from './navigation/AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function AppProvider() {

  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        dispatch(setTokenFromStorage(storedToken));
      }
    };

    checkToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{flex:1}}  edges={['top', 'left', 'right']}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
