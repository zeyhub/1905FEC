import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomePageScreen from '../screens/HomePageScreen';
import NotificationsScreen from '../screens/NotificationsScreen'; // boş ekranla başla istersen
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Anaekran') {
            iconName = 'home-outline';
          } else if (route.name === 'Bildirimler') {
            iconName = 'notifications-outline';
          } else if (route.name === 'Hesabım') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#7C3AED',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Anaekran" component={HomePageScreen} />
      <Tab.Screen name="Bildirimler" component={NotificationsScreen} />
      <Tab.Screen name="Hesabım" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;