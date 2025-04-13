import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
}

const TabHeader: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TabHeader;
