import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing} from '../../styles/vars';

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.sm,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    fontSize: FontSize.lg,
    fontWeight: '600',
    color: Colors.text,
    backgroundColor: Colors.background,
    marginHorizontal: 4,
  },
  focusedInput: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  errorInput: {
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
    fontSize: FontSize.sm,
    marginTop: Spacing.xs,
    textAlign: 'center',
  },
});

export default styles;
