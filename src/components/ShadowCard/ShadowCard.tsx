import React from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';

const ShadowCard: React.FC<ViewProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

export default ShadowCard;
