import {StyleSheet} from 'react-native';
import {Colors, FontSize, Radius, Spacing, FontWeight} from '../../styles/vars';

export default StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: '#00000055',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderBox: {
    backgroundColor: Colors.background,
    padding: Spacing.lg,
    borderRadius: Radius.md,
  },
  loaderText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium as any,
    color: Colors.primary,
  },
  errorBox: {
    backgroundColor: Colors.background,
    padding: Spacing.lg,
    borderRadius: Radius.md,
    width: '80%',
    alignItems: 'center',
  },
  errorText: {
    fontSize: FontSize.md,
    color: Colors.error,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: Radius.sm,
  },
  closeButtonText: {
    color: Colors.background,
    fontWeight: FontWeight.bold as any,
  },
});
