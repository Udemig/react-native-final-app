import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/auth/login/Login';
import {AppScreens} from '../constants/appScreens';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppScreens.Login} component={Login} />
    </Stack.Navigator>
  );
};
