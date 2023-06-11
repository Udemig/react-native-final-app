import React, {useEffect} from 'react';
import {AuthNavigator} from '@navigators/authNavigator';
import {TabNavigator} from '@navigators/tabNavigator';
import NavigationContainer from '@navigators/navigationContainer';
import {_useAuth} from '@store/auth';

export default function App() {
  const {status} = _useAuth();

  useEffect(() => {}, []);

  useEffect(() => {
    console.log('useEffect,status', status);
  }, [status]);

  return (
    <NavigationContainer>
      {status === 'signIn' ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
