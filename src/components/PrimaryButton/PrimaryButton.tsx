import React from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';
import Text from '../Text';

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PrimaryButton: React.FC<Props> = ({ title, onPress, style, textStyle = {} }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
