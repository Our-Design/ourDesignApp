import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing, FontWeight} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.lg,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold as any,
    color: Colors.text,
    marginBottom: Spacing.lg,
  },
  footer: {
    marginTop: Spacing.lg,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: FontSize.sm,
    color: Colors.text,
  },
  link: {
    fontSize: FontSize.sm,
    color: Colors.primary,
    fontWeight: FontWeight.medium as any,
  },
});
