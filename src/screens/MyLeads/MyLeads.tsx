/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchMyLeads, setSelectedLead } from '../../store/slices/leadsSlice';
import styles from './styles';
import LeadCard from '../../components/LeadCard';
import { useNavigation } from '@react-navigation/native';

const MyLeads = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const myLeads = useSelector((state: RootState) => state.leads.myLeads);

  useEffect(() => {
    dispatch(fetchMyLeads());
  }, []);

  const handlePress = (lead: any) => {
    dispatch(setSelectedLead(lead));
    navigation.navigate('LeadDetails');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Purchased Leads</Text>

      <FlatList
        data={myLeads}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <LeadCard lead={item} onPress={() => handlePress(item)} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default MyLeads;
