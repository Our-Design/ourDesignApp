import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ImageBackground,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {sendOTP, setTempEmail} from '../../store/slices/authSlice';
import {AppDispatch, RootState} from '../../store';
import FormInput from '../../components/FormInput';
import PrimaryButton from '../../components/PrimaryButton';
import ShadowCard from '../../components/ShadowCard';
import Text from '../../components/Text';
import CustomStatusBar from '../../components/CustomStatusBar';
import Icons from '../../constants/icons';
import {isAndroid, isIOS} from '../../utils/platformHelper';
import {Colors} from '../../styles/vars';
import styles from './styles';

const EmailVerificationScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const {loading} = useSelector((state: RootState) => state.ui);

  const [email, setEmail] = useState('');
  const [hasEmailError, setHasEmailError] = useState(false);

  const handleSendOTP = async () => {
    if (!email || hasEmailError) {
      return;
    }

    try {
      dispatch(setTempEmail(email));
      await dispatch(sendOTP(email)).unwrap();
      navigation.navigate('CompleteRegistration');
    } catch (error) {
      // Error handling is done in the thunk
    }
  };

  return (
    <ImageBackground source={Icons.background} style={styles.backgroundImage}>
      {isAndroid && <CustomStatusBar backgroundColor={Colors.background} />}
      <KeyboardAvoidingView
        behavior={isIOS ? 'padding' : undefined}
        style={styles.container}>
        <ShadowCard style={styles.card}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subtitle}>
            We'll send you a verification code to your email address
          </Text>

          <FormInput
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            inputType="email"
            required
            onValidationChange={setHasEmailError}
          />

          <PrimaryButton
            title={loading ? 'Sending OTP...' : 'Send OTP'}
            onPress={handleSendOTP}
            disabled={loading || !email || hasEmailError}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}> Login</Text>
            </Pressable>
          </View>
        </ShadowCard>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default EmailVerificationScreen;
