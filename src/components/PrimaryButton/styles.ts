import {StyleSheet} from 'react-native';
import {Radius, Spacing, Colors, FontSize} from '../../styles/vars';

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: Radius.md,
    alignItems: 'center',
    marginTop: Spacing.md,
    // Enhanced shadow
    shadowColor: Colors.buttonPrimary,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    color: '#fff',
    fontSize: FontSize.md,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: Colors.muted,
    // Remove shadow for disabled state
    shadowOpacity: 0,
    elevation: 0,
  },
  disabledText: {
    color: Colors.subText,
  },
});
