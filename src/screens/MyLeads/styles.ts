import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing} from '../../styles/vars';
import {screenHeight} from '../../utils/platformHelper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
  heading: {
    fontSize: FontSize.xl,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  list: {
    paddingBottom: Spacing.xl,
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
