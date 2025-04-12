import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing, FontWeight} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
  content: {
    paddingBottom: Spacing.xl,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold as any,
    color: Colors.text,
    marginBottom: Spacing.lg,
  },
  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium as any,
    color: Colors.subText,
    marginTop: Spacing.md,
  },
  value: {
    fontSize: FontSize.md,
    color: Colors.text,
    marginTop: Spacing.xs,
  },
});
