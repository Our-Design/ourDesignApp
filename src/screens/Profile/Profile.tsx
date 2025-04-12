import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import styles from './styles';
import { logout } from '../../store/slices/authSlice';

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No user logged in.</Text>
        <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} color="#FF3B30" />
      </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>

      <Text style={styles.label}>Name</Text>
      <Text style={styles.value}>{user.name}</Text>

      <Text style={styles.label}>Phone</Text>
      <Text style={styles.value}>{user.phone}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} color="#FF3B30" />
      </View>
    </View>
  );
};

export default Profile;
