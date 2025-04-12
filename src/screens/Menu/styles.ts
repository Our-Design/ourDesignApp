import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing, FontWeight} from '../../styles/vars';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.md,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold as any,
    color: Colors.text,
  },
});

export default styles;
