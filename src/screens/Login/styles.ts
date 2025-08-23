import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing} from '../../styles/vars';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    resizeMode: 'center',
    padding: Spacing.lg,
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    marginBottom: Spacing.xl,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    color: Colors.heading,
    marginBottom: Spacing.lg,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginTop: Spacing.md,
  },
  forgotPasswordLink: {
    color: Colors.primary,
    fontSize: FontSize.sm,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.lg,
  },
  footerText: {
    color: Colors.subText,
  },
  link: {
    color: Colors.primary,
    fontWeight: '600',
  },
});
