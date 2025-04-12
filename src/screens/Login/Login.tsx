import React, { useState } from 'react';
import { View, Button, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import styles from './styles';
import FormInput from '../../components/FormInput';
import { AppDispatch } from '../../store';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
    const navigation = useNavigation<any>();


  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!phone || !password) {return;}
    dispatch(login({ phone, password }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <FormInput
        label="Phone Number"
        placeholder="Enter phone number"
        value={phone}
        onChangeText={setPhone}
        inputType="phoneNumber"
        required
      />

      <FormInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        inputType="password"
        required
      />

      <Button title="Login" onPress={handleLogin} />

      <View style={styles.footer}>
              <Text style={styles.footerText}>New to application?</Text>
              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}> Register</Text>
              </Pressable>
            </View>
    </View>
  );
};

export default Login;
