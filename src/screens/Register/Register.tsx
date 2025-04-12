import React, { useState } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { register } from '../../store/slices/authSlice';
import { AppDispatch } from '../../store';
import styles from './styles';
import FormInput from '../../components/FormInput';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !phone || !password) {return;}
    dispatch(register({ name, phone, password }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <FormInput
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        inputType="text"
        required
      />

      <FormInput
        label="Phone Number"
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        inputType="phoneNumber"
        required
      />

      <FormInput
        label="Password"
        placeholder="Create a password"
        value={password}
        onChangeText={setPassword}
        inputType="password"
        required
      />

      <Button title="Register" onPress={handleRegister} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}> Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
