import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@pages/client/home';
import {AppScreens} from '@constants/appScreens';
import Profile from '@pages/client/profile';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={AppScreens.Home} component={Home} />
      <Tab.Screen name={AppScreens.Profile} component={Profile} />
    </Tab.Navigator>
  );
};
