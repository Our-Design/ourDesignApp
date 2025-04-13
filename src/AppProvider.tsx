import {  useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from './store/slices/authSlice';
import AppNavigator from './navigation/AppNavigator';


export default function AppProvider() {

  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        dispatch(setToken(storedToken));
      }
    };

    checkToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
  );
}
