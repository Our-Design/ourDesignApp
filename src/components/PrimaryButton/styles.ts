import {StyleSheet} from 'react-native';
import {Radius, Spacing, Colors, FontSize} from '../../styles/vars';

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: Radius.md,
    alignItems: 'center',
    marginTop: Spacing.md,
  },
  text: {
    color: '#fff',
    fontSize: FontSize.md,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: Colors.muted,
  },
  disabledText: {
    color: Colors.subText,
  },
});
