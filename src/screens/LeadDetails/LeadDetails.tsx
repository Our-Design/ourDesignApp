import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './styles';

const LeadDetails = () => {
  const lead = useSelector((state: RootState) => state.leads.selectedLead);

  if (!lead) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No lead selected.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{lead.customerName}</Text>
      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.value}>{lead.customerMobile}</Text>

      <Text style={styles.label}>Location:</Text>
      <Text style={styles.value}>{lead.location}</Text>

      <Text style={styles.label}>Budget:</Text>
      <Text style={styles.value}>₹{lead.budget}</Text>

      <Text style={styles.label}>Status:</Text>
      <Text style={styles.value}>{lead.status}</Text>

      <Text style={styles.label}>Verified:</Text>
      <Text style={styles.value}>{lead.isVerified ? 'Yes' : 'No'}</Text>

      <Text style={styles.label}>Created:</Text>
      <Text style={styles.value}>{new Date(lead.createdAt).toLocaleString()}</Text>
    </ScrollView>
  );
};

export default LeadDetails;
