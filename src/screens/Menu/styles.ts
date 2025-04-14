import {StyleSheet} from 'react-native';
import {Colors, Spacing} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  linkText: {
    fontSize: 16,
    color: '#333',
  },

  icon: {
    marginRight: 12,
  },
  list: {},
});
