import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import MyLeadsScreen from '../screens/MyLeads';
import MenuScreen from '../screens/Menu';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="MyLeads" component={MyLeadsScreen} />
    <Tab.Screen name="Menu" component={MenuScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
