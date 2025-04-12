import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing, Radius} from '../../styles/vars';

export default StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    padding: Spacing.md,
    borderRadius: Radius.md,
    marginBottom: Spacing.md,
    elevation: 2,
  },
  name: {
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    color: Colors.text,
  },
  detail: {
    fontSize: FontSize.sm,
    color: Colors.subText,
    marginTop: Spacing.xs,
  },
  status: {
    fontSize: FontSize.sm,
    marginTop: Spacing.xs,
    color: Colors.primary,
  },
});
