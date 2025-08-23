import React from 'react';
import {View, ScrollView, Pressable, Linking, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles/vars';
import Text from '../../components/Text';
import RazorpayCheckout from 'react-native-razorpay';
import {RAZORPAY_KEY_ID} from 'react-native-dotenv';
import {useNavigation} from '@react-navigation/native';
import {createOrderAPI} from '../../api/payments';
import {setError, setLoading} from '../../store/slices/uiSlice';

const LeadDetails = () => {
  const lead = useSelector((state: RootState) => state.leads.selectedLead);
  const user = useSelector((state: RootState) => state.auth.user);
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();

  if (!lead) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No lead selected.</Text>
      </View>
    );
  }

  const fromMyLeads = !!lead.customerMobile;
  const createdDate = new Date(lead.createdAt).toLocaleDateString();

  const getFullAddress = (addressObj: Record<string, any> = {}) => {
    return [
      addressObj.addressLine1,
      addressObj.city,
      addressObj.state,
      addressObj.pinCode,
      addressObj.country,
    ]
      .filter(Boolean)
      .join(', ');
  };

  const handleWhatsApp = () => {
    const phone = lead.customerMobile;
    if (phone) {
      Linking.openURL(`https://wa.me/91${phone}`);
    }
  };

  const handleSMS = () => {
    const phone = lead.customerMobile;
    if (phone) {
      Linking.openURL(`sms:${phone}`);
    }
  };

  const handleCall = () => {
    const phone = lead.customerMobile;
    if (phone) {
      Linking.openURL(`tel:${phone}`);
    }
  };

  const handleBuyNow = async () => {
    dispatch(setLoading(true));
    try {
      // 1. Call backend to create Razorpay order
      const order = await createOrderAPI({
        amount: lead.leadPrice * 100, // in paisa (₹500)
        leadId: lead._id,
        designerId: user?._id || '',
      });

      dispatch(setLoading(false));

      // 2. Razorpay Checkout options
      const options = {
        description: 'Access this lead contact',
        image: '../../assets/images/ourLogo.png',
        currency: order.currency,
        key: RAZORPAY_KEY_ID,
        amount: order.amount, // in paisa
        order_id: order.orderId,
        name: 'Our Design',
        prefill: {
          name: user?.name,
          contact: user?.phone,
        },
        notes: {
          leadId: lead._id,
          designerId: user?._id,
          source: 'mobile-app',
        },
        theme: {color: Colors.primary},
      };

      // 3. Open Razorpay modal
      RazorpayCheckout.open(options as any)
        .then(() => {
          Alert.alert(
            'Success',
            'Access granted successfully. If contact details are not visible you can contact support team',
            [
              {
                text: 'My Leads',
                onPress: () => {
                  navigation.navigate('Main', {
                    screen: 'MyLeads',
                  });
                },
              },
            ],
          );
        })
        .catch(error => {
          const {description} = error?.error;
          Alert.alert(
            'Access Failed',
            description && description !== 'undefined'
              ? description
              : 'Something went wrong.',
          );
        });
    } catch (err: any) {
      dispatch(setLoading(false));
      dispatch(setError(err.message || 'Failed to initiate access'));
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}>
        {/* Header Card */}
        <View style={styles.headerCard}>
          <Text style={styles.title}>{lead.propertyType}</Text>

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color={Colors.accent} />
            <Text style={styles.locationText}>
              {getFullAddress(lead.address)}
            </Text>
          </View>

          {lead.isVerified && (
            <Text style={styles.verified}>✅ Verified Lead</Text>
          )}
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Budget:</Text>
            <Text style={styles.value}>₹ {lead.budget}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Size:</Text>
            <Text style={styles.value}>{lead.propertySize} sqft</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Posted on:</Text>
            <Text style={styles.value}>{createdDate}</Text>
          </View>
        </View>

        {/* Description Card */}
        {lead.description && (
          <View style={styles.infoCard}>
            <Text style={styles.sectionHeading}>DESCRIPTION</Text>
            <Text style={styles.description}>{lead.description}</Text>
          </View>
        )}

        {/* Owner Card */}
        <View style={styles.ownerCard}>
          <Text style={styles.contactLabel}>Owner Details:</Text>
          <View style={styles.ownerRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {lead.customerName?.charAt(0).toUpperCase() || 'A'}
              </Text>
            </View>
            <View style={styles.ownerDetails}>
              <Text style={styles.ownerName}>
                {fromMyLeads ? lead.customerName : '*********'}
              </Text>
              <Text style={styles.ownerContact}>
                {fromMyLeads ? lead.customerMobile : '**********'}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.contactLabel}>Contact owner:</Text>
          <View style={styles.contactRow}>
            <Pressable
              style={[
                styles.contactIcon,
                !fromMyLeads && {backgroundColor: Colors.muted},
              ]}
              onPress={fromMyLeads ? handleWhatsApp : undefined}
              disabled={!fromMyLeads}>
              <Ionicons
                name="logo-whatsapp"
                size={22}
                color={fromMyLeads ? Colors.background : Colors.subText}
              />
            </Pressable>
            <Pressable
              style={[
                styles.contactIcon,
                !fromMyLeads && {backgroundColor: Colors.muted},
              ]}
              onPress={fromMyLeads ? handleSMS : undefined}
              disabled={!fromMyLeads}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={22}
                color={fromMyLeads ? Colors.background : Colors.subText}
              />
            </Pressable>
            <Pressable
              style={[
                styles.contactIcon,
                !fromMyLeads && {backgroundColor: Colors.muted},
              ]}
              onPress={fromMyLeads ? handleCall : undefined}
              disabled={!fromMyLeads}>
              <Ionicons
                name="call-outline"
                size={22}
                color={fromMyLeads ? Colors.background : Colors.subText}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {!fromMyLeads && (
        <View style={styles.footer}>
          {lead.status === 'new' ? (
            <Pressable style={styles.accessButton} onPress={handleBuyNow}>
              <Text style={styles.accessButtonText}>Access Contact</Text>
            </Pressable>
          ) : (
            <Pressable
              style={[
                styles.accessButton,
                {backgroundColor: Colors.buttonDangerMuted},
              ]}
              disabled>
              <Text
                style={[styles.accessButtonText, {color: Colors.background}]}>
                Unavailable
              </Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default LeadDetails;
