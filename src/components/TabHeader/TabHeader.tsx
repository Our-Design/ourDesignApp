import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import CustomStatusBar from '../CustomStatusBar';
import { Colors } from '../../styles/vars';
import Text from '../Text';

interface Props {
  title: string;
}

const TabHeader: React.FC<Props> = ({ title }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <CustomStatusBar backgroundColor={Colors.headerBackground}/>
         <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TabHeader;
