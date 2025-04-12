import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
  heading: {
    fontSize: FontSize.xl,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  list: {
    paddingBottom: Spacing.xl,
  },
});
