import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing, FontWeight} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.lg,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold as any,
    color: Colors.text,
    marginBottom: Spacing.lg,
  },
  label: {
    fontSize: FontSize.sm,
    color: Colors.subText,
    marginTop: Spacing.md,
  },
  value: {
    fontSize: FontSize.md,
    color: Colors.text,
    marginTop: Spacing.xs,
  },
  buttonContainer: {
    marginTop: Spacing.xl,
  },
  message: {
    fontSize: FontSize.md,
    color: Colors.text,
  },
});
