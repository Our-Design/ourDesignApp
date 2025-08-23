import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing} from '../../styles/vars';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: Spacing.lg,
    justifyContent: 'center',
  },
  card: {
    marginBottom: Spacing.xl,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    color: Colors.heading,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.success,
    marginBottom: Spacing.lg,
    textAlign: 'center',
    fontWeight: '500',
  },
  otpContainer: {
    marginBottom: Spacing.lg,
  },
  otpLabel: {
    fontSize: FontSize.md,
    color: Colors.text,
    marginBottom: Spacing.sm,
    fontWeight: '500',
  },
  disabledInput: {
    backgroundColor: Colors.muted,
    color: Colors.subText,
  },
  disabledContainer: {
    opacity: 0.7,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.lg,
  },
  link: {
    color: Colors.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
});
