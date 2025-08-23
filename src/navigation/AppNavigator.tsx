import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/Login';
import EmailVerificationScreen from '../screens/EmailVerification';
import CompleteRegistrationScreen from '../screens/CompleteRegistration';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import ResetPasswordScreen from '../screens/ResetPassword';
import LeadDetailsScreen from '../screens/LeadDetails';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {Colors, FontFamily} from '../styles/vars';
import WebViewScreen from '../screens/WebView/WebView';
import {Image, View} from 'react-native';
import Icons from '../constants/icons';
import Text from '../components/Text';
import styles from './styles';

const Stack = createNativeStackNavigator();

const headerTitle = () => (
  <View style={styles.container}>
    <Image
      source={Icons.logo}
      style={styles.imageStyle}
      width={30}
      height={30}
    />
    <Text style={styles.base}>OurDesign</Text>
  </View>
);

const AppNavigator = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {token ? (
        <>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen
            name="LeadDetails"
            component={LeadDetailsScreen}
            options={{
              headerShown: true,
              title: 'Lead Details',
              headerStyle: {
                backgroundColor: Colors.headerBackground,
              },
              headerTitleStyle: {
                fontSize: 18,
                fontWeight: 'bold',
                color: Colors.text,
                fontFamily: FontFamily.regular,
              },
              headerTintColor: Colors.primary,
              headerBackVisible: true,
              headerBackButtonDisplayMode: 'minimal',
            }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPasswordScreen}
            options={{
              headerTitle: headerTitle,
              headerTitleAlign: 'center',
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
            }}
          />
          <Stack.Screen
            name="WebViewScreen"
            component={WebViewScreen}
            options={({route}: any) => ({title: route.params?.title})}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTitle: headerTitle,
              headerTitleAlign: 'center',
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
            }}
          />
          <Stack.Screen
            name="EmailVerification"
            component={EmailVerificationScreen}
            options={{
              headerTitle: headerTitle,
              headerTitleAlign: 'center',
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
            }}
          />
          <Stack.Screen
            name="CompleteRegistration"
            component={CompleteRegistrationScreen}
            options={{
              headerTitle: headerTitle,
              headerTitleAlign: 'center',
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{
              headerTitle: headerTitle,
              headerTitleAlign: 'center',
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
