import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';
import Text from '../Text';

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const PrimaryButton: React.FC<Props> = ({
  title,
  onPress,
  style,
  textStyle = {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={StyleSheet.flatten([
          styles.text,
          disabled && styles.disabledText,
          textStyle,
        ])}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
