import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing} from '../../styles/vars';

const styles = StyleSheet.create({
  timerText: {
    color: Colors.subText,
    fontSize: FontSize.sm,
    textAlign: 'center',
    marginTop: Spacing.sm,
  },
  resendButton: {
    alignSelf: 'center',
    marginTop: Spacing.sm,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
  },
  resendText: {
    color: Colors.primary,
    fontSize: FontSize.sm,
    fontWeight: '600',
    textAlign: 'center',
  },
  disabledText: {
    color: Colors.subText,
  },
});

export default styles;
