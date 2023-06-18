import React, {useRef} from 'react';
import {
  NavigationContainer as RnNavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useColorScheme} from 'react-native';
import analytics from '@react-native-firebase/analytics';

export default function NavigationContainer({children}) {
  const isDark = useColorScheme() === 'dark';

  const routeNameRef = useRef();
  const navigationRef = useRef();

  //   const theme = useThemeConfig();
  return (
    <SafeAreaProvider>
      <RnNavigationContainer
        theme={isDark ? DarkTheme : DefaultTheme}
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef?.current?.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          const previosRouteName = routeNameRef.current;
          const currentRouteName =
            navigationRef?.current?.getCurrentRoute().name;

          if (previosRouteName !== currentRouteName) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }

          routeNameRef.current = currentRouteName;
        }}>
        {children}
      </RnNavigationContainer>
    </SafeAreaProvider>
  );
}
