import React from 'react';
import {Button} from '@components/ui/core/button';
import {signOut} from '@store/auth';
import {ScrollView} from '@components/ui/core/scroll-view';
import {View} from '@components/ui/core/view';
import {Text} from '@components/ui/core/text';
import {ItemsContainer} from './itemsContainer';
import {Item} from './items';
import {LanguageItem} from './LanguageItem';

export default function Profile() {
  return (
    <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
      <View className="flex-1 px-4 py-4">
        <View className="w-full mt-5 items-center justify-center">
          <View className="rounded-full w-28 h-28 bg-primary-500 items-center justify-center">
            <Text variant="xl" className="text-white">
              FT
            </Text>
          </View>
        </View>
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
