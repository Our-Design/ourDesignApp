// src/components/CustomStatusBar.tsx
import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  backgroundColor: string;
  barStyle?: 'light-content' | 'dark-content' | 'default';
  style?: object;
}

const CustomStatusBar: React.FC<Props> = ({
  backgroundColor,
  barStyle = 'dark-content',
  style,
}) => {
  const insets = useSafeAreaInsets();

  // Android translucent StatusBar needs a top spacer; fall back to currentHeight.
  const topInset =
    Platform.OS === 'android'
      ? insets.top || StatusBar.currentHeight || 0
      : insets.top;

  return (
    <View
      style={{
        height: topInset,
        backgroundColor,
        ...style,
      }}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        showHideTransition="fade"
      />
    </View>
  );
};

export default CustomStatusBar;
