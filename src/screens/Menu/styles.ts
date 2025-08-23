import {StyleSheet} from 'react-native';
import {Colors, Spacing, FontSize, Radius} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
    borderRadius: Radius.md,
    backgroundColor: Colors.card,
    // Add shadow
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    // Add subtle border
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  linkText: {
    fontSize: FontSize.md,
    color: Colors.text,
    fontWeight: '500',
  },
  icon: {
    marginRight: Spacing.sm,
  },
  list: {
    paddingBottom: Spacing.xl,
  },
});
