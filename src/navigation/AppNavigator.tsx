import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import LeadDetailsScreen from '../screens/LeadDetails';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  console.log(token);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="LeadDetails" component={LeadDetailsScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
