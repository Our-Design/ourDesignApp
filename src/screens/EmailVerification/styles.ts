import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing} from '../../styles/vars';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    padding: Spacing.lg,
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
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.subText,
    marginBottom: Spacing.lg,
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.md,
  },
  footerText: {
    color: Colors.subText,
  },
  link: {
    color: Colors.primary,
    fontWeight: '600',
  },
});
