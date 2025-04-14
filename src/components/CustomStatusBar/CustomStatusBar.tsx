// src/components/CustomStatusBar.tsx
import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacing } from '../../styles/vars';

interface Props {
  backgroundColor: string;
}

const CustomStatusBar: React.FC<Props> = ({ backgroundColor }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: Platform.OS === 'ios' ?  insets.top : Spacing.na , backgroundColor}}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle="dark-content"
        showHideTransition="fade"
      />
    </View>
  );
};

export default CustomStatusBar;
