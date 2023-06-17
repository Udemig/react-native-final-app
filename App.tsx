import React, {useEffect} from 'react';
import {AuthNavigator} from '@navigators/authNavigator';
import {TabNavigator} from '@navigators/tabNavigator';
import NavigationContainer from '@navigators/navigationContainer';
import {_useAuth} from '@store/auth';
import FlashMessage from 'react-native-flash-message';
import {
  getFcmToken,
  notificationListener,
  requestUserPermission,
} from '@utils/notifications';

export default function App() {
  const {status} = _useAuth();

  useEffect(() => {
    requestUserPermission();
    getFcmToken();
    notificationListener();
  }, []);

  useEffect(() => {
    console.log('useEffect,status', status);
  }, [status]);

  return (
    <NavigationContainer>
      <FlashMessage position="top" />
      {status === 'signIn' ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
