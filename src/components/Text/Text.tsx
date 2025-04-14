import React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import styles from './styles';

interface Props extends TextProps {
  style?: TextStyle | TextStyle[];
}

const Text: React.FC<Props> = ({ style, children, ...rest }) => {
  return (
    <RNText {...rest} style={[styles.base, style]}>
      {children}
    </RNText>
  );
};

export default Text;
