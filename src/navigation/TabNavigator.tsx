import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import MyLeads from '../screens/MyLeads';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';
import { Colors } from '../styles/vars';
import TabHeader from '../components/TabHeader';

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName: string, color: string, size: number) => {
  let iconName = 'home-outline';

  switch (routeName) {
    case 'Home':
      iconName = 'home-outline';
      break;
    case 'MyLeads':
      iconName = 'document-text-outline';
      break;
    case 'Menu':
      iconName = 'menu-outline';
      break;
    case 'Profile':
      iconName = 'person-circle-outline';
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const renderHeader = (title: string) => () => <TabHeader title={title} />;


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.subText,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopColor: Colors.border,
        },
        tabBarIcon: ({ color, size }) =>
          getTabIcon(route.name, color, size),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="MyLeads"
        component={MyLeads}
        options={{
          header: renderHeader('My Leads'),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          header: renderHeader('Menu'),
          headerShown: true,

        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          header: renderHeader('Profile'),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
