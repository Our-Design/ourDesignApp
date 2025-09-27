import React, {useCallback, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  logout,
  deleteAccount as deleteAccountThunk,
} from '../../store/slices/authSlice';
import {AppDispatch, RootState} from '../../store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Text from '../../components/Text';
import styles from './styles';
import ShadowCard from '../../components/ShadowCard';
import PrimaryButton from '../../components/PrimaryButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const user = useSelector((state: RootState) => state.auth.user);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleLogout = () => dispatch(logout());

  const handleResetPassword = () => {
    navigation.navigate('ResetPassword');
  };

  const handleConfirmDelete = useCallback(async () => {
    try {
      setIsDeleting(true);
      const response = await dispatch(deleteAccountThunk()).unwrap();
      await dispatch(logout());
      navigation.navigate('Login');
      Alert.alert(
        'Account deleted',
        response?.message ||
          'Your account has been deleted successfully. We hope to see you again!',
      );
    } catch (error: any) {
    } finally {
      setIsDeleting(false);
    }
  }, [dispatch, navigation]);

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete account?',
      'This action will permanently delete your account and associated data. This cannot be undone.',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', style: 'destructive', onPress: handleConfirmDelete},
      ],
    );
  };

  if (!user) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.emptyContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.emptyText}>User not logged in</Text>
        <PrimaryButton
          title="Logout"
          onPress={handleLogout}
          style={styles.logoutBtn}
        />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <View style={styles.flexStyle}>
        <View style={styles.bgCircleOne} />
        <View style={styles.bgCircleTwo} />
        <ShadowCard style={styles.card}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {user.name?.[0]?.toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.phone}>{user.phone}</Text>
            </View>
          </View>

          {/* Info Rows */}
          <View style={styles.infoRow}>
            <Ionicons name="person-outline" size={20} style={styles.icon} />
            <Text style={styles.label}>Role:</Text>
            <Text style={styles.value}>{user.role}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons
              name="wallet-outline"
              size={20}
              color={Colors.success}
              style={styles.icon}
            />
            <Text style={styles.label}>Wallet:</Text>
            <Text style={styles.value}>₹ {user.walletBalance}</Text>
          </View>

          {user.address && (
            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={20} style={styles.icon} />
              <Text style={styles.label}>Address:</Text>
              <Text style={styles.value}>{user.address}</Text>
            </View>
          )}

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={20} style={styles.icon} />
            <Text style={styles.label}>Joined on:</Text>
            <Text style={styles.value}>
              {new Date(user.createdAt).toLocaleDateString()}
            </Text>
          </View>
        </ShadowCard>
      </View>

      <PrimaryButton
        title={isDeleting ? 'Deleting...' : 'Delete Account'}
        onPress={handleDeleteAccount}
        style={styles.logoutBtn}
        disabled={isDeleting}
      />

      <PrimaryButton
        title="Reset Password"
        onPress={handleResetPassword}
        style={styles.resetPasswordBtn}
      />
      <PrimaryButton
        title="Logout"
        onPress={handleLogout}
        style={styles.logoutBtn}
        textStyle={styles.logoutText}
      />
    </ScrollView>
  );
};

export default Profile;
