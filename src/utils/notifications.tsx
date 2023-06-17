import messaging from '@react-native-firebase/messaging';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import notifee from '@notifee/react-native';

export const FCM_TOKEN_KEY = 'token';

const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log(`Permission ${enabled} ${authStatus}`);
  }

  return enabled;
};

const getFcmToken = async () => {
  if (Platform.OS === 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }

  let fcmToken = '';

  try {
    const hasPermission = await messaging().hasPermission();

    if (hasPermission) {
      await messaging().setAPNSToken('', 'unknown');
      await messaging().registerDeviceForRemoteMessages();

      fcmToken = await messaging().getToken();

      console.log('Token: ', fcmToken);

      return fcmToken;
    }
  } catch (error) {
    console.log(error);

    return fcmToken;
  }
};

const notificationListener = async () => {
  const granted = await messaging().requestPermission();

  if (granted) {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('remoteMessage', remoteMessage);
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log('Background Notifications', remoteMessage);
      })
      .catch(error => {
        console.log('Eror bg ', error);
      });

    messaging().onMessage(async remoteMessage => {
      Alert.alert('A new fcm message arrived', JSON.stringify(remoteMessage));

      // showMessage(type:"success", message:remoteMessage.notification.title + " "+remoteMessage.notification.body)
    });
  } else {
    console.log('No permissions!');
  }
};

const onMessageReceived = async (message: any) => {
  console.log('Message', message);

  if (message?.data) {
    notifee.displayNotification(message.data);
  }
};

export {
  requestUserPermission,
  getFcmToken,
  notificationListener,
  onMessageReceived,
};
