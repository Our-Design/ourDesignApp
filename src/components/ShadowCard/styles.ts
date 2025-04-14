import {StyleSheet} from 'react-native';
import {Colors, Radius, Spacing} from '../../styles/vars';

export default StyleSheet.create({
  card: {
    backgroundColor: Colors.background,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // for Android
  },
});
