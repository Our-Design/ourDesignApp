import React from 'react';
import {View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles/vars';
import {Lead} from '../../store/slices/leadsSlice';
import styles from './styles';
import Text from '../Text';

interface Props {
  lead: Lead;
  onPress: () => void;
}

const LeadCard: React.FC<Props> = ({lead, onPress}) => {
  const newLead = lead.status === 'new';
  const myLead = lead.customerMobile;
  const statusColor =
    newLead || myLead ? Colors.primary : Colors.buttonDangerMuted;
  const textColor = newLead || myLead ? Colors.background : Colors.background;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.bgCircleOne} />
        <View style={styles.bgCircleTwo} />

        {/* Customer Name or Placeholder */}
        <Text style={styles.name}>{lead.customerName || 'Lead Info'}</Text>

        {/* Budget */}
        {lead.budget !== undefined && (
          <Text style={styles.budget}>
            <Text style={styles.budgetLabel}>Budget: </Text>₹ {lead.budget}
          </Text>
        )}

        {/* Property Type */}
        {lead.propertyType && (
          <Text style={styles.propertyType}>{lead.propertyType}</Text>
        )}

        {/* Address */}
        {lead.address && (
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color={Colors.accent} />
            <Text style={styles.location}>{lead.address.city}</Text>
          </View>
        )}

        {/* CTA Button */}
        <Pressable
          style={[styles.button, {backgroundColor: statusColor}]}
          onPress={onPress}>
          <Text style={[styles.buttonText, {color: textColor}]}>
            {myLead
              ? 'View Details'
              : lead.status === 'sold'
              ? 'Unavailable'
              : lead.status}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LeadCard;
