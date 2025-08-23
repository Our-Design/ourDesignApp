import {StyleSheet} from 'react-native';
import {Colors, FontSize, Radius, Spacing} from '../../styles/vars';

export default StyleSheet.create({
  cardContainer: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  card: {
    backgroundColor: Colors.card,
    padding: Spacing.lg,
    borderRadius: Radius.lg,
    marginBottom: Spacing.md,

    // Enhanced iOS Shadow
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 8,

    // Enhanced Android Shadow
    elevation: 6,
    position: 'relative',
    marginHorizontal: 2,

    // Add subtle border
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  name: {
    fontSize: FontSize.lg,
    fontWeight: '600',
    color: Colors.heading,
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  budget: {
    fontSize: FontSize.md,
    color: Colors.text,
    marginBottom: 2,
  },
  budgetLabel: {
    fontWeight: '500',
    color: Colors.subText,
  },
  propertyType: {
    fontSize: FontSize.md,
    color: Colors.text,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  location: {
    fontSize: FontSize.sm,
    color: Colors.subText,
    marginLeft: 4,
  },
  button: {
    backgroundColor: Colors.buttonPrimary,
    paddingVertical: Spacing.md,
    borderRadius: Radius.md,
    alignItems: 'center',
    marginTop: Spacing.sm,
    // Add shadow for iOS
    shadowColor: Colors.buttonPrimary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Add elevation for Android
    elevation: 3,
  },
  buttonText: {
    color: Colors.background,
    fontSize: FontSize.md,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  bgCircleOne: {
    position: 'absolute',
    top: -60,
    right: -20,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Colors.buttonPrimary,
    opacity: 0.08,
    zIndex: 1,
  },

  bgCircleTwo: {
    position: 'absolute',
    top: -20,
    right: -60,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Colors.buttonSuccess,
    opacity: 0.08,
    zIndex: 1,
  },
});
