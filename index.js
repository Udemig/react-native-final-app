/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import '@i18n';
import messaging from '@react-native-firebase/messaging';
import {onMessageReceived} from '@utils/notifications';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Background message received', remoteMessage);

  onMessageReceived(remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
