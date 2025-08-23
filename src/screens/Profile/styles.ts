import {StyleSheet} from 'react-native';
import {Colors, FontSize, Radius, Spacing} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
    paddingBottom: 100,
  },
  card: {
    padding: Spacing.lg,
    borderRadius: Radius.lg,
    backgroundColor: Colors.card,
    // Enhanced shadow for iOS
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 12,
    // Enhanced elevation for Android
    elevation: 8,
    // Add subtle border
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
    // Add shadow
    shadowColor: Colors.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  avatarText: {
    fontSize: FontSize.lg,
    fontWeight: '600',
    color: Colors.background,
  },
  name: {
    fontSize: FontSize.lg,
    fontWeight: '600',
    color: Colors.text,
    textTransform: 'capitalize',
  },
  phone: {
    fontSize: FontSize.sm,
    color: Colors.accent,
    marginTop: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  icon: {
    color: Colors.primary,
    marginRight: Spacing.sm,
    width: 24,
  },
  label: {
    fontSize: FontSize.sm,
    color: Colors.accent,
    marginRight: Spacing.xs,
    width: 90,
  },
  value: {
    fontSize: FontSize.md,
    color: Colors.text,
    flex: 1,
    fontWeight: '500',
  },
  logoutBtn: {
    marginTop: Spacing.xl,
    backgroundColor: Colors.buttonDangerMuted,
    // Add shadow
    shadowColor: Colors.buttonDangerMuted,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  resetPasswordBtn: {
    marginTop: Spacing.lg,
    backgroundColor: Colors.primary,
    // Add shadow
    shadowColor: Colors.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: {
    color: Colors.background,
    fontWeight: '600',
  },
  emptyText: {
    fontSize: FontSize.md,
    color: Colors.text,
    textAlign: 'center',
    marginTop: Spacing.xl,
  },
  flexStyle: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    padding: 2,
  },
  bgCircleOne: {
    position: 'absolute',
    top: -60,
    right: -20,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Colors.buttonPrimary,
    opacity: 0.1,
    zIndex: 1,
  },

  bgCircleTwo: {
    position: 'absolute',
    top: -20,
    right: -60,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Colors.buttonSecondary,
    opacity: 0.1,
    zIndex: 1,
  },
});
