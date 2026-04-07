import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken, setUser} from './store/slices/authSlice';
import {RootState} from './store';
import AppNavigator from './navigation/AppNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Alert, Linking, View} from 'react-native';
import {FontSize, Spacing} from './styles/vars';
import {isAndroid} from './utils/platformHelper';
import AppStateListener from './components/AppStateListener/AppStateListener';
import {useUpdateCheck} from './hooks/useUpdateCheck';

export default function AppProvider() {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const {storeUpdateInfo, showStoreModal} = useUpdateCheck();

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

  useEffect(() => {
    if (showStoreModal && storeUpdateInfo?.storeUrl) {
      Alert.alert(
        'Update Available',
        'A new version of the app is available. Please update to continue.',
        [
          {
            text: 'Update',
            onPress: () => {
              if (storeUpdateInfo?.storeUrl) {
                Linking.openURL(storeUpdateInfo?.storeUrl);
              }
            },
          },
        ],
        {cancelable: false},
      );
    }
  }, [showStoreModal, dispatch, storeUpdateInfo?.storeUrl]);

  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <NavigationContainer>
        <AppNavigator />
        <AppStateListener />
      </NavigationContainer>
    </View>
  );
}
