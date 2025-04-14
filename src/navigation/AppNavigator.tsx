import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import LeadDetailsScreen from '../screens/LeadDetails';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {Colors, FontFamily} from '../styles/vars';
import WebViewScreen from '../screens/WebView/WebView';

const Stack = createNativeStackNavigator();

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
              title: 'OurDesign',
              headerShown: true,
              headerStyle: {
                backgroundColor: Colors.background,
              },
              headerTitleStyle: {
                fontSize: 20,
                color: Colors.text,
                fontFamily: FontFamily.regular,
              },
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              title: 'OurDesign',
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerStyle: {
                backgroundColor: Colors.background,
              },
              headerTitleStyle: {
                fontSize: 20,
                color: Colors.text,
                fontFamily: FontFamily.regular,
              },
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
