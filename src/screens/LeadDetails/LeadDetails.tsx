import React from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/vars';
import Text from '../../components/Text';

const LeadDetails = () => {
  const lead = useSelector((state: RootState) => state.leads.selectedLead);

  if (!lead) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No lead selected.</Text>
      </View>
    );
  }

  const createdDate = new Date(lead.createdAt).toLocaleDateString();
  const newLead = lead.status === 'new';

  return (
    <View style={styles.container}>
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Title & Location */}
      <Text style={styles.title}>{lead.propertyType}</Text>

      <View style={styles.locationRow}>
        <Ionicons name="location-outline" size={16} color={Colors.accent} />
        <Text style={styles.locationText}>{lead.address}</Text>
      </View>

      {/* Budget & Info */}
      <Text style={styles.label}>
        Budget: <Text style={styles.value}>₹ {lead.budget}</Text>
      </Text>
      <Text style={styles.label}>
        Size: <Text style={styles.value}>{lead.propertySize} sqft</Text>
      </Text>
      <Text style={styles.label}>
        Posted on: <Text style={styles.value}>{createdDate}</Text>
      </Text>

      {/* Description */}
      {lead.description && (
        <>
          <Text style={styles.sectionHeading}>DESCRIPTION</Text>
          <Text style={styles.description}>{lead.description}</Text>
        </>
      )}

      <View style={styles.divider} />

      {/* Owner Details */}
      <Text style={styles.label}>Owner Details:</Text>
      <View style={styles.ownerRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {lead.customerName?.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={styles.ownerDetails}>
          <Text style={styles.ownerName}>{lead.customerName}</Text>
          <Text style={styles.ownerContact}>{lead.customerMobile}</Text>
          <Pressable>
            <Text style={styles.profileLink}>View Profile</Text>
          </Pressable>
        </View>
      </View>

      {/* Contact */}
      <Text style={styles.label}>Contact owner:</Text>
      <View style={styles.contactRow}>
        <Pressable style={styles.contactIcon}>
          <Ionicons name="logo-whatsapp" size={20} color={Colors.background} />
        </Pressable>
        <Pressable style={styles.contactIcon}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color={Colors.background} />
        </Pressable>
        <Pressable style={styles.contactIcon}>
          <Ionicons name="call-outline" size={20} color={Colors.background} />
        </Pressable>
      </View>
    </ScrollView>
      <View style={styles.footer}>
        {
          newLead ?
          <Pressable style={styles.buyButton} onPress={() => {}}>
            <Text style={styles.buyButtonText}>Buy Lead</Text>
          </Pressable> :
          <Pressable style={[styles.buyButton,{backgroundColor: Colors.soft}]} onPress={() => {}}>
            <Text style={[styles.buyButtonText, {color: Colors.subText}]}>Sold</Text>
          </Pressable>
        }

      </View>
    </View>
  );
};

export default LeadDetails;
