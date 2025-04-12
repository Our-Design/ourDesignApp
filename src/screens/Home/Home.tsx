/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchAllLeads, setSelectedLead } from '../../store/slices/leadsSlice';
import styles from './styles';
import LeadCard from '../../components/LeadCard';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const leads = useSelector((state: RootState) => state.leads.leads);

  useEffect(() => {
    dispatch(fetchAllLeads());
  }, []);

  const handleLeadPress = (lead: any) => {
    dispatch(setSelectedLead(lead));
    navigation.navigate('LeadDetails');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Property Leads</Text>

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
