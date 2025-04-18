import {StyleSheet} from 'react-native';
import {
  Colors,
  FontSize,
  Spacing,
  FontWeight,
  Radius,
  FontFamily,
} from '../../styles/vars';
import {screenHeight} from '../../utils/platformHelper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingBottom: Spacing.xl,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  greeting: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold as any,
    color: Colors.text,
    fontFamily: FontFamily.bold,
  },
  count: {
    fontSize: FontSize.sm,
    color: Colors.subText,
    marginBottom: Spacing.sm,
  },
  list: {
    paddingBottom: Spacing.xl,
    padding: Spacing.lg,
  },
  topContainer: {
    backgroundColor: Colors.headerBackground,
    padding: Spacing.lg,
    borderBottomEndRadius: Radius.max,
    borderBottomStartRadius: Radius.max,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: screenHeight * 0.6,
    paddingVertical: Spacing.lg,
  },
  emptyImage: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.accent,
    textAlign: 'center',
  },
});
