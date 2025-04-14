import React, {useState} from 'react';
import {View, Pressable, KeyboardAvoidingView} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../store/slices/authSlice';
import FormInput from '../../components/FormInput';
import {AppDispatch} from '../../store';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../components/CustomStatusBar';
import ShadowCard from '../../components/ShadowCard';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';
import {Colors} from '../../styles/vars';
import Text from '../../components/Text';
import {isIOS} from '../../utils/platformHelper';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!phone || !password) {
      return;
    }
    dispatch(login({phone, password}));
  };

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'padding' : undefined}
      style={styles.container}>
      <CustomStatusBar backgroundColor={Colors.background} />
      <ShadowCard style={styles.card}>
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

        <PrimaryButton title="Login" onPress={handleLogin} />
      </ShadowCard>

      <View style={styles.footer}>
        <Text style={styles.footerText}>New to application?</Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}> Register</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
