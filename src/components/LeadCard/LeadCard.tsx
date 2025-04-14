import React from 'react';
import { View, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/vars';
import { Lead } from '../../store/slices/leadsSlice';
import styles from './styles';
import Text from '../Text';

interface Props {
  lead: Lead;
  onPress: () => void;
}

const LeadCard: React.FC<Props> = ({ lead, onPress }) => {
  const newLead = lead.status === 'new';
  return (
    <View style={styles.cardContainer}>
    <View style={styles.card}>
      <View style={styles.bgCircleOne} />
      <View style={styles.bgCircleTwo} />

      <Text style={styles.name}>{lead.customerName}</Text>

      {lead.budget !== undefined && (
        <Text style={styles.budget}>
          <Text style={styles.budgetLabel}>Budget: </Text>₹ {lead.budget}
        </Text>
      )}

      {lead.propertyType && (
        <Text style={styles.propertyType}>{lead.propertyType}</Text>
      )}

      {lead.address && (
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={16} color={Colors.accent} />
          <Text style={styles.location}>{lead.address}</Text>
        </View>
      )}

      <Pressable style={[styles.button, {backgroundColor: newLead ? Colors.primary : Colors.soft}]} onPress={onPress}>
        <Text style={[styles.buttonText, {color: newLead ? Colors.background : Colors.subText}]}>{lead.status}</Text>
      </Pressable>
    </View>
    </View>
  );
};

export default LeadCard;
