import {StyleSheet} from 'react-native';
import {Colors, Radius, Spacing, FontSize} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: Spacing.lg,
    paddingBottom: 100,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: 'bold',
    color: Colors.heading,
    marginBottom: Spacing.sm,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  locationText: {
    marginLeft: Spacing.xs,
    color: Colors.subText,
    fontSize: FontSize.sm,
  },
  verified: {
    marginBottom: Spacing.sm,
    color: Colors.success,
    fontWeight: '600',
  },
  label: {
    marginTop: Spacing.sm,
    fontWeight: '600',
    color: Colors.heading,
  },
  value: {
    fontWeight: '400',
    color: Colors.text,
  },
  sectionHeading: {
    marginTop: Spacing.md,
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.primary,
  },
  description: {
    color: Colors.text,
    marginTop: Spacing.xs,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.md,
  },
  ownerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.sm,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.sm,
  },
  avatarText: {
    color: Colors.background,
    fontWeight: 'bold',
  },
  ownerDetails: {},
  ownerName: {
    fontWeight: '600',
    color: Colors.text,
  },
  ownerContact: {
    color: Colors.accent,
    fontSize: FontSize.sm,
  },
  profileLink: {
    color: Colors.primary,
    fontSize: FontSize.sm,
    marginTop: 2,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: Spacing.sm,
    gap: Spacing.md,
  },
  contactIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Spacing.md,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  buyButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: Radius.lg,
    alignItems: 'center',
  },
  buyButtonText: {
    color: Colors.background,
    fontWeight: 'bold',
    fontSize: FontSize.md,
  },
});
