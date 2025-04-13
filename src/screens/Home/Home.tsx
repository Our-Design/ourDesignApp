/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import {
  fetchAllLeads,
  selectFilteredLeads,
  setFilters,
  setSelectedLead,
} from '../../store/slices/leadsSlice';
import styles from './styles';
import LeadCard from '../../components/LeadCard';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LeadSearchFilterBar from '../../components/LeadSearchFilteraBar';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const leads = useSelector(selectFilteredLeads);
  const user = useSelector((state: RootState) => state.auth.user);
  const filters = useSelector((state: RootState) => state.leads.filters);

  useEffect(() => {
    dispatch(fetchAllLeads());
  }, []);

  const handleLeadPress = (lead: any) => {
    dispatch(setSelectedLead(lead));
    navigation.navigate('LeadDetails');
  };

  const handleRefresh = () => {
    dispatch(fetchAllLeads());
  };

  return (
    <View style={styles.container}>
      {/* Greeting + Refresh */}
      <View style={styles.headerRow}>
        <Text style={styles.greeting}>Hi {user?.name || 'there'} 👋</Text>
        <TouchableOpacity onPress={handleRefresh}>
          <Ionicons name="refresh" size={22} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Lead count */}
      <Text style={styles.count}>{leads.length} Leads</Text>

      {/* Search + Filter bar */}
      <LeadSearchFilterBar
        value={filters.search}
        onChangeText={(text) => dispatch(setFilters({ search: text }))}
        onFilterChange={(filterValues) => dispatch(setFilters(filterValues))}
      />

      {/* Lead list */}
      <FlatList
        data={leads}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <LeadCard lead={item} onPress={() => handleLeadPress(item)} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Home;
