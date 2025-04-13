import {StyleSheet} from 'react-native';
import {Colors, Spacing, Radius} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: Spacing.md,
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.card,
    paddingHorizontal: Spacing.sm,
    borderRadius: Radius.sm,
    alignItems: 'center',
    height: 40,
  },
  input: {
    flex: 1,
    marginLeft: Spacing.sm,
    color: Colors.text,
  },
  filterButton: {
    marginLeft: Spacing.sm,
    backgroundColor: Colors.primary,
    padding: Spacing.sm,
    borderRadius: Radius.sm,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'flex-end',
  },
  modalBox: {
    backgroundColor: Colors.background,
    padding: Spacing.lg,
    borderTopLeftRadius: Radius.lg,
    borderTopRightRadius: Radius.lg,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: Spacing.md,
  },
  applyButton: {
    marginTop: Spacing.lg,
    backgroundColor: Colors.primary,
    padding: Spacing.md,
    borderRadius: Radius.md,
    alignItems: 'center',
  },
  applyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sortRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  active: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
  rangeRow: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 8,
  },
  rangeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.sm,
    paddingHorizontal: Spacing.sm,
    height: 40,
    color: Colors.text,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'center',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  clearButton: {
    backgroundColor: Colors.border,
    flex: 1,
    marginRight: 10,
  },
  clearText: {
    color: Colors.text,
    textAlign: 'center',
    fontWeight: '600',
  },
});
