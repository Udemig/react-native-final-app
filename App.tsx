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
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  const {status} = _useAuth();

  useEffect(() => {
    requestUserPermission();
    getFcmToken();
    notificationListener();

    SplashScreen.hide();
  }, []);

  useEffect(() => {
    console.log('useEffect,status', status);
  }, [status]);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <FlashMessage position="top" />
        {status === 'signIn' ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
