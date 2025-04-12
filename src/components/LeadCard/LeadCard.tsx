import React from 'react';
import {  Text, Pressable } from 'react-native';
import styles from './styles';
import { Lead } from '../../store/slices/leadsSlice';

interface Props {
  lead: Lead;
  onPress?: () => void;
}

const LeadCard: React.FC<Props> = ({ lead, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{lead.customerName}</Text>
      <Text style={styles.detail}>📍 {lead.location}</Text>
      <Text style={styles.detail}>💰 ₹{lead.budget}</Text>
      <Text style={styles.status}>Status: {lead.status}</Text>
    </Pressable>
  );
};

export default LeadCard;
