import {Text} from '@components/ui/core/text';
import {View} from '@components/ui/core/view';
import React from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export function ItemsContainer({children, title}): Props {
  return (
    <View>
      {title && <Text variant="lg">{title}</Text>}

      <View className="rounded-md border-[1px]">{children}</View>
    </View>
  );
}
