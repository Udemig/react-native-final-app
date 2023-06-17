import React from 'react';
import {TouchableOpacity} from '@components/ui/core/touchableOpacity';
import {Text} from '@components/ui/core/text';
import {View} from '@components/ui/core/view';

type ItemProps = {
  text: string;
  value?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
};

export function Item({text, value, icon, onPress}): ItemProps {
  const isPressable = onPress !== undefined;

  const Container = isPressable ? TouchableOpacity : View;

  return (
    <Container
      onPress={onPress}
      className="flex-1 flex-row items-center justify-between p-3">
      <View className="flex-row items-center">
        {icon && <View className="pr-2">{icon}</View>}
        <Text variant="md" className="text-neutral-900">
          {text}
        </Text>
      </View>
      <View className="flex-row items-center">
        <Text variant="md" className="text-neutral-900">
          {value}
        </Text>
        {isPressable && (
          <View className="pl-2">
            <Text>{'>'}</Text>
          </View>
        )}
      </View>
    </Container>
  );
}
