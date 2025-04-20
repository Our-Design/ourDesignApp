import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken, setUser} from './store/slices/authSlice';
import AppNavigator from './navigation/AppNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {FontSize, Spacing} from './styles/vars';
import {isAndroid} from './utils/platformHelper';
import AppStateListener from './components/AppStateListener/AppStateListener';

export default function AppProvider() {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      const user = await AsyncStorage.getItem('user');

      if (storedToken) {
        dispatch(setToken(storedToken));
      }
      if (user) {
        dispatch(setUser(JSON.parse(user)));
      }
    };

    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      style={{
        paddingTop: isAndroid ? insets.top : Spacing.na,
        flex: FontSize.x1,
      }}>
      <NavigationContainer>
        <AppNavigator />
        <AppStateListener />
      </NavigationContainer>
    </View>
  );
}
