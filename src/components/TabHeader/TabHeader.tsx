import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CustomStatusBar from '../CustomStatusBar';
import { Colors } from '../../styles/vars';
import Text from '../Text';

interface Props {
  title: string;
}

const TabHeader: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.header}>
     <CustomStatusBar backgroundColor={Colors.headerBackground}/>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TabHeader;
