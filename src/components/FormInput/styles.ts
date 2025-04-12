import {StyleSheet} from 'react-native';
import {Colors, FontSize, FontWeight, Radius, Spacing} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium as any,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.sm,
    borderRadius: Radius.sm,
    fontSize: FontSize.md,
    color: Colors.text,
  },
  errorInput: {
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
    fontSize: FontSize.xs,
    marginTop: Spacing.xs,
  },
});
