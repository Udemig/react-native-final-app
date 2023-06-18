import React from 'react';
import {Button} from '@components/ui/core/button';
import {signOut} from '@store/auth';
import {ScrollView} from '@components/ui/core/scroll-view';
import {View} from '@components/ui/core/view';
import {Text} from '@components/ui/core/text';
import {ItemsContainer} from './itemsContainer';
import {Item} from './items';
import {LanguageItem} from './LanguageItem';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import {Image, PermissionsAndroid, Platform} from 'react-native';

export default function Profile() {
  async function requestStoragePermission() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Storage permission',
        message: 'App needs access to storage to upload images',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Storage permission granted');
    } else {
      console.log('Storage permission denied');
    }

    return granted;
  }

  const uploadFile = async (image: string, uri: string) => {
    const reference = storage().ref(`images/${image}`);

    reference
      .putFile(uri)
      .then(async response => {
        console.log('Upload imaged successfully', response);

        const url = await reference.getDownloadURL();

        console.log('Url', url);

        updateUserInfo(url);
      })
      .catch(errr => console.log(errr));
  };

  const updateUserInfo = (photoURL: string) => {
    auth().currentUser.updateProfile({
      photoURL,
    });
  };

  const showImageLibrary = async () => {
    if (Platform.OS === 'android') {
      const granted = await requestStoragePermission();

      console.log('Grandted', granted);

      if (granted === 'granted' || granted === 'never_ask_again') {
        const result = await launchImageLibrary({
          selectionLimit: 1,
          mediaType: 'mixed',
          includeExtra: true,
        });

        if (result.didCancel) {
          console.log('User cancelled');
          return;
        }

        if (result.errorCode) {
          console.log('Error', result.errorMessage);
          return;
        }

        const [image] = result.assets;

        uploadFile(image.fileName, image.uri);

        console.log('Result', result);
      }
    }
  };

  console.log('Current User ', auth().currentUser);

  return (
    <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
      <View className="flex-1 px-4 py-4">
        {auth().currentUser.photoURL ? (
          <View className="w-full mt-5 items-center justify-center">
            <Image
              source={{uri: auth().currentUser.photoURL}}
              style={{width: 100, height: 100, borderRadius: 50}}
            />
          </View>
        ) : (
          <View className="w-full mt-5 items-center justify-center">
            <View className="rounded-full w-28 h-28 bg-primary-500 items-center justify-center">
              <Text variant="xl" className="text-white">
                FT
              </Text>
            </View>
          </View>
        )}

        <View className="w-full items-center mt-3">
          <Text variant="xl" className="text-white font-bold">
            Furkan Türkyılmaz
          </Text>
          <Text variant="xs" className="text-white">
            trkyilmazfurkan@gmail.com
          </Text>
          <Text variant="xs" className="text-white">
            054323423234
          </Text>
          <Button label="Logout" variant="outline" onPress={() => signOut()} />
          <Button
            label="Photo Library"
            variant="outline"
            onPress={() => showImageLibrary()}
          />
        </View>

        <ItemsContainer title="General">
          <Item text="App Name" value="Udemig" />
          <Item text="Version" value="Udemig" onPress={() => {}} />
          <LanguageItem />
        </ItemsContainer>
      </View>
    </ScrollView>
  );
}
