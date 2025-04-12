import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { logout } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Logout" onPress={()=> dispatch(logout())}/>
    </View>
  );
};

export default HomeScreen;
