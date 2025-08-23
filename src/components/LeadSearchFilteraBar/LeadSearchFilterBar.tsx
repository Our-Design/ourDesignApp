import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Switch} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import styles from './styles';
import {resetFilters} from '../../store/slices/leadsSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import FormInput from '../FormInput';
import {Colors} from '../../styles/vars';
import Text from '../Text';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onFilterChange: (filters: {
    sortBy: 'none' | 'price-asc' | 'price-desc';
    priceMin: number;
    priceMax: number;
    status: string[];
  }) => void;
}

const LeadSearchFilterBar: React.FC<Props> = ({
  value,
  onChangeText,
  onFilterChange,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState<'none' | 'price-asc' | 'price-desc'>(
    'none',
  );
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [status, setStatus] = useState<{[key: string]: boolean}>({
    new: true,
    sold: true,
  });

  const dispatch = useDispatch<AppDispatch>();

  const hasActiveFilters =
    sortBy !== 'none' ||
    priceMin.trim() !== '' ||
    priceMax.trim() !== '' ||
    Object.values(status).some(v => !v);

  const applyFilters = () => {
    const selectedStatuses = Object.keys(status).filter(key => status[key]);
    onFilterChange({
      sortBy,
      priceMin: Number(priceMin) || 0,
      priceMax: Number(priceMax) || Infinity,
      status: selectedStatuses,
    });
    setModalVisible(false);
  };

  const handleClearFilters = () => {
    dispatch(resetFilters());
    setPriceMax('');
    setPriceMin('');
    setSortBy('none');
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color={Colors.accent} />
          <TextInput
            placeholder="Search by location..."
            placeholderTextColor={Colors.accent}
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.filterButton}>
          <Ionicons name="filter" size={20} color={Colors.background} />
          {hasActiveFilters && <View style={styles.filterBadge} />}
        </TouchableOpacity>
      </View>

      {/* Filter Modal */}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        style={styles.modalWrapper}
        statusBarTranslucent>
        <View style={styles.modalBox}>
          <View style={styles.dragIndicator} />
          <Text style={styles.modalTitle}>Filter Options</Text>

          {/* Sort */}
          <Text style={styles.label}>Sort by Price:</Text>
          <View style={styles.sortColumn}>
            <TouchableOpacity
              onPress={() => setSortBy('price-asc')}
              style={[
                styles.sortOption,
                sortBy === 'price-asc' && styles.activeSort,
              ]}>
              <Ionicons
                name="arrow-up-outline"
                size={18}
                color={sortBy === 'price-asc' ? Colors.primary : Colors.accent}
              />
              <Text
                style={[
                  styles.sortLabel,
                  sortBy === 'price-asc' ? styles.activeSortText : {},
                ]}>
                Low to High
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSortBy('price-desc')}
              style={[
                styles.sortOption,
                sortBy === 'price-desc' && styles.activeSort,
              ]}>
              <Ionicons
                name="arrow-down-outline"
                size={18}
                color={sortBy === 'price-desc' ? Colors.primary : Colors.accent}
              />
              <Text
                style={[
                  styles.sortLabel,
                  sortBy === 'price-desc' ? styles.activeSortText : {},
                ]}>
                High to Low
              </Text>
            </TouchableOpacity>
          </View>

          {/* Price Range */}
          <Text style={styles.label}>Price Range:</Text>
          <View style={styles.rangeRow}>
            <FormInput
              placeholder="Min"
              inputType="numeric"
              value={priceMin}
              onChangeText={setPriceMin}
              style={styles.rangeInput}
              containerStyle={styles.containerStyle}
            />
            <FormInput
              placeholder="Max"
              inputType="numeric"
              value={priceMax}
              onChangeText={setPriceMax}
              style={styles.rangeInput}
              containerStyle={styles.containerStyle}
            />
          </View>

          {/* Status */}
          <Text style={styles.label}>Status:</Text>
          {Object.keys(status).map(key => (
            <View key={key} style={styles.statusRow}>
              <Text style={styles.sortLabel}>
                {key === 'sold' ? 'UNAVAILABLE' : key.toUpperCase()}
              </Text>
              <Switch
                value={status[key]}
                onValueChange={val =>
                  setStatus(prev => ({...prev, [key]: val}))
                }
              />
            </View>
          ))}

          {/* Actions */}
          <View style={styles.modalActions}>
            <TouchableOpacity
              onPress={handleClearFilters}
              style={[styles.applyButton, styles.clearButton]}>
              <Text style={styles.clearText}>Clear Filters</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={applyFilters} style={styles.applyButton}>
              <Text style={styles.applyText}>Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default LeadSearchFilterBar;
