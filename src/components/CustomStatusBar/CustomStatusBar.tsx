// src/components/CustomStatusBar.tsx
import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  backgroundColor: string;
}

const CustomStatusBar: React.FC<Props> = ({ backgroundColor }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor}}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle="dark-content"
      />
    </View>
  );
};

export default CustomStatusBar;
