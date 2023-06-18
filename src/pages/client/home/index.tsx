import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Screen} from '@components/ui/core/screen';
import BottomSheet from '@gorhom/bottom-sheet';
import {View} from '@components/ui/core/view';
import {Text} from '@components/ui/core/text';
import {Button} from '@components/ui/core/button';
import {useColorScheme} from 'react-native';
import {TouchableOpacity} from '@components/ui/core/touchableOpacity';

export default function Home() {
  const isDark = useColorScheme() === 'dark';

  const [isShowOpen, setIsOpen] = useState(false);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleShowOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Screen>
      <Button onPress={handleShowOpen} label="Bottomsheet Show" />

      {isShowOpen && (
        <BottomSheet
          ref={bottomSheetRef}
          style={{cp: isDark ? '#000' : '#fff'}}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <TouchableOpacity onPress={() => {}} className="dark:bg-charcoal-900">
            <View
              className={'items-center justify-center  dark:bg-charcoal-900'}>
              <Text variant="xl" className="font-bold">
                {isDark ? 'Change Light Mode' : 'Change Dark Mode'} 🎉
              </Text>
            </View>
          </TouchableOpacity>
        </BottomSheet>
      )}
    </Screen>
  );
}
