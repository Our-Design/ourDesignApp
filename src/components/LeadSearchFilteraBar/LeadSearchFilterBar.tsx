import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Text,
  Switch,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { resetFilters } from '../../store/slices/leadsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

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
    'none'
  );
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [status, setStatus] = useState<{ [key: string]: boolean }>({
    new: true,
    sold: true,
  });
  const dispatch = useDispatch<AppDispatch>();

  const applyFilters = () => {
    const selectedStatuses = Object.keys(status).filter((key) => status[key]);
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
    setModalVisible(false);
  };


  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput
            placeholder="Search by name..."
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.filterButton}
        >
          <Ionicons name="filter" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Filter Options</Text>

            {/* Sort */}
            <Text>Sort by Price:</Text>
            <View style={styles.sortRow}>
              <TouchableOpacity onPress={() => setSortBy('price-asc')}>
                <Text style={sortBy === 'price-asc' ? styles.active : undefined}>Low to High</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSortBy('price-desc')}>
                <Text style={sortBy === 'price-desc' ? styles.active : undefined}>High to Low</Text>
              </TouchableOpacity>
            </View>

            {/* Price Range */}
            <Text>Price Range:</Text>
            <View style={styles.rangeRow}>
              <TextInput
                placeholder="Min"
                keyboardType="numeric"
                value={priceMin}
                onChangeText={setPriceMin}
                style={styles.rangeInput}
              />
              <TextInput
                placeholder="Max"
                keyboardType="numeric"
                value={priceMax}
                onChangeText={setPriceMax}
                style={styles.rangeInput}
              />
            </View>

            {/* Status Filter */}
            <Text>Status:</Text>
            {Object.keys(status).map((key) => (
              <View key={key} style={styles.statusRow}>
                <Text>{key}</Text>
                <Switch
                  value={status[key]}
                  onValueChange={(val) =>
                    setStatus((prev) => ({ ...prev, [key]: val }))
                  }
                />
              </View>
            ))}

            <View style={styles.modalActions}>
            <TouchableOpacity
                onPress={handleClearFilters}
                style={[styles.applyButton, styles.clearButton]}
            >
                <Text style={styles.clearText}>Clear Filters</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={applyFilters} style={styles.applyButton}>
                <Text style={styles.applyText}>Apply Filters</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default LeadSearchFilterBar;
