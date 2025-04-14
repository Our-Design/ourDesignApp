import {StyleSheet} from 'react-native';
import {Colors, FontSize, Radius, Spacing} from '../../styles/vars';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.sm,
  },
  searchBox: {
    flex: 1,
    backgroundColor: Colors.card,
    borderRadius: Radius.md,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    height: 40,
    marginLeft: Spacing.sm,
    fontSize: FontSize.md,
    color: Colors.text,
  },
  filterButton: {
    backgroundColor: Colors.primary,
    marginLeft: Spacing.sm,
    padding: Spacing.sm,
    borderRadius: Radius.md,
    position: 'relative',
  },

  // Modal
  modalWrapper: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalBox: {
    backgroundColor: Colors.card,
    padding: Spacing.lg,
    borderTopLeftRadius: Radius.xl,
    borderTopRightRadius: Radius.xl,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 12,
  },
  dragIndicator: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.accent,
    alignSelf: 'center',
    marginBottom: Spacing.md,
  },
  modalTitle: {
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    color: Colors.heading,
    marginBottom: Spacing.md,
  },
  label: {
    color: Colors.heading,
    fontWeight: '600',
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  sortColumn: {
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  sortOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
  },
  sortLabel: {
    marginLeft: Spacing.sm,
    color: Colors.text,
  },
  activeSort: {
    backgroundColor: Colors.secondary,
    borderRadius: Radius.sm,
    paddingHorizontal: Spacing.sm,
  },
  activeSortText: {
    color: Colors.primary,
    fontWeight: '600',
  },
  rangeRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginVertical: Spacing.sm,
  },
  rangeInput: {
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    marginBottom: 0,
    height: 40,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Spacing.xs,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.lg,
  },
  applyButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: Radius.md,
    alignItems: 'center',
    marginLeft: Spacing.sm,
  },
  applyText: {
    color: Colors.background,
    fontWeight: 'bold',
    fontSize: FontSize.md,
  },
  clearButton: {
    backgroundColor: Colors.soft,
    marginLeft: 0,
    marginRight: Spacing.sm,
  },
  clearText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: FontSize.md,
  },
  filterBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: Colors.border,
    borderWidth: 0.5,
    backgroundColor: Colors.error,
  },
});
