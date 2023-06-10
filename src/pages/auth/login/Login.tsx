import React from 'react';

import {Button} from '@components/ui/core/button';
import {SafeAreaView} from '@components/ui/core/view';
import {useColorScheme} from 'nativewind';
import {Title} from '@components/ui/core/title';
import {Text} from '@components/ui/core/text';
import {Screen} from '@components/ui/core/screen';

export default function Login() {
  const {colorScheme, toggleColorScheme} = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Screen>
        <Title text="Sign In" />
        <Text className="text-black dark:text-white">
          {colorScheme} Open up App.js to start working on your app!
        </Text>
        <Button label="Login" onPress={() => toggleColorScheme()} />
        <Button
          label="Login"
          variant="secondary"
          onPress={() => toggleColorScheme()}
        />
      </Screen>
    </SafeAreaView>
  );
}
