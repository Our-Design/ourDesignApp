import {StyleSheet} from 'react-native';
import {Colors, Spacing, FontSize} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
  link: {
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },
  linkText: {
    fontSize: FontSize.md,
    color: Colors.primary,
  },
  list: {},
});
