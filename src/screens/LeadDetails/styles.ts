import {StyleSheet} from 'react-native';
import {Colors, FontFamily, FontSize, Radius, Spacing} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lighterHeader,
  },
  content: {
    padding: Spacing.lg,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: '600',
    color: Colors.heading,
    marginBottom: Spacing.xs,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  locationText: {
    marginLeft: Spacing.xs,
    color: Colors.subText,
    fontSize: FontSize.sm,
  },
  label: {
    fontWeight: '600',
    fontSize: FontSize.md,
    color: Colors.text,
    marginBottom: Spacing.xs,
    fontFamily: FontFamily.bold,
  },
  value: {
    fontWeight: '400',
    color: Colors.subText,
  },
  sectionHeading: {
    fontSize: FontSize.sm,
    color: Colors.primary,
    fontWeight: 'bold',
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  description: {
    fontSize: FontSize.sm,
    color: Colors.subText,
    marginBottom: Spacing.md,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.lg,
  },
  ownerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  ownerDetails: {
    gap: Spacing.sm,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.soft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.sm,
  },
  avatarText: {
    color: Colors.heading,
    fontWeight: '600',
    fontSize: FontSize.md,
  },
  ownerName: {
    fontWeight: '600',
    fontSize: FontSize.md,
    color: Colors.text,
  },
  ownerContact: {
    fontSize: FontSize.sm,
    color: Colors.subText,
    marginTop: 2,
  },
  profileLink: {
    color: Colors.primary,
    fontWeight: '500',
    marginTop: 2,
    fontSize: FontSize.sm,
  },
  footer: {
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.md,
    backgroundColor: Colors.headerBackground,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 10,
  },
  buyButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: Radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: {
    color: Colors.background,
    fontSize: FontSize.md,
    fontWeight: '600',
  },
  contactRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.sm,
    marginBottom: Spacing.xl,
  },
  contactIcon: {
    backgroundColor: Colors.accent,
    padding: Spacing.md,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
