import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/auth/login/Login';
import {AppScreens} from '../constants/appScreens';
import Register from '@pages/auth/register/Register';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppScreens.Login} component={Login} />
      <Stack.Screen name={AppScreens.Register} component={Register} />
    </Stack.Navigator>
  );
};
