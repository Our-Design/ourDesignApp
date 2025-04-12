import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../store';
import {logout} from '../store/slices/authSlice';
import {resetUI} from '../store/slices/uiSlice';

export const handleLogout = async () => {
  await AsyncStorage.removeItem('token');
  store.dispatch(logout());
  store.dispatch(resetUI());
};
