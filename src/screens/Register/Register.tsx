import React, {useState} from 'react';
import {
  View,
  Pressable,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {register} from '../../store/slices/authSlice';
import styles from './styles';
import FormInput from '../../components/FormInput';
import {AppDispatch} from '../../store';
import {useNavigation} from '@react-navigation/native';
import ShadowCard from '../../components/ShadowCard';
import PrimaryButton from '../../components/PrimaryButton';
import {Text} from 'react-native-gesture-handler';
import {isIOS} from '../../utils/platformHelper';
import Icons from '../../constants/icons';

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !phone || !password) {
      return;
    }
    dispatch(register({name, phone, password}));
  };

  return (
    <ImageBackground source={Icons.background} style={styles.backgroundImage}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={isIOS ? 40 : 0}
        behavior={isIOS ? 'padding' : undefined}
        style={styles.container}>
        <ShadowCard style={styles.card}>
          <Text style={styles.title}>Register</Text>

          <FormInput
            label="Full Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            inputType="text"
            required
          />

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
            placeholder="Create password"
            value={password}
            onChangeText={setPassword}
            inputType="password"
            required
          />

          <PrimaryButton title="Register" onPress={handleRegister} />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already registered?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}> Login</Text>
            </Pressable>
          </View>
        </ShadowCard>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Register;
