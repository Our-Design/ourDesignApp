import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken, setUser} from './store/slices/authSlice';
import AppNavigator from './navigation/AppNavigator';
import {Alert, Linking, View} from 'react-native';
import AppStateListener from './components/AppStateListener/AppStateListener';
import {useUpdateCheck} from './hooks/useUpdateCheck';

export default function AppProvider() {
  const dispatch = useDispatch();
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
