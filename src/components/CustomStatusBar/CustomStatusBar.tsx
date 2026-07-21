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

  return (
    <View
      style={{
        height: Platform.OS === 'ios' ? insets.top : 0,
        backgroundColor:
          Platform.OS === 'ios' ? backgroundColor : 'transparent',
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
