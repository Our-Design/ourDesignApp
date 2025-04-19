import {StyleSheet} from 'react-native';
import {FontFamily, FontSize, Spacing} from '../styles/vars';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {isAndroid} from '../utils/platformHelper';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  base: {
    fontFamily: FontFamily.regular,
    color: Colors.text,
    fontSize: isAndroid ? FontSize.lg : FontSize.md,
  },
  imageStyle: {
    resizeMode: 'contain',
  },
});
