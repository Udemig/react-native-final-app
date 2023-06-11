import React from 'react';
import {
  NavigationContainer as RnNavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useColorScheme} from 'react-native';

export default function NavigationContainer({children}) {
  const isDark = useColorScheme() === 'dark';

  //   const theme = useThemeConfig();
  return (
    <SafeAreaProvider>
      <RnNavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        {children}
      </RnNavigationContainer>
    </SafeAreaProvider>
  );
}
