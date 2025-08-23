import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ImageBackground,
  ScrollView,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {register, resendOTP} from '../../store/slices/authSlice';
import {AppDispatch, RootState} from '../../store';
import FormInput from '../../components/FormInput';
import ResendTimer from '../../components/ResendTimer';
import PrimaryButton from '../../components/PrimaryButton';
import ShadowCard from '../../components/ShadowCard';
import Text from '../../components/Text';
import CustomStatusBar from '../../components/CustomStatusBar';
import Icons from '../../constants/icons';
import {isAndroid, isIOS} from '../../utils/platformHelper';
import {Colors} from '../../styles/vars';
import styles from './styles';

const CompleteRegistrationScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const {loading} = useSelector((state: RootState) => state.ui);
  const {tempEmail} = useSelector((state: RootState) => state.auth);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState<string | null>(null);
  const [isResending, setIsResending] = useState(false);
  const [hasNameError, setHasNameError] = useState(false);
  const [hasPhoneError, setHasPhoneError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);

  const handleRegister = async () => {
    if (
      !name ||
      !phone ||
      !password ||
      !tempEmail ||
      !otp ||
      hasNameError ||
      hasPhoneError ||
      hasPasswordError ||
      otpError
    ) {
      return;
    }

    if (otp.length !== 6) {
      setOtpError('Please enter 6-digit OTP');
      return;
    }

    try {
      setOtpError(null);
      await dispatch(
        register({
          name,
          phone,
          email: tempEmail,
          password,
          otp,
        }),
      ).unwrap();
      // Navigation will be handled by AppNavigator based on token state
    } catch (error) {
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  const handleResendOTP = async () => {
    if (!tempEmail) {
      navigation.navigate('EmailVerification');
      return;
    }

    try {
      setIsResending(true);
      await dispatch(resendOTP(tempEmail)).unwrap();
      setOtp('');
      setOtpError(null);
    } catch (error) {
      // Error handling is done in the thunk
    } finally {
      setIsResending(false);
    }
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
    if (otpError) {
      setOtpError(null);
    }
  };

  const isFormValid =
    name.trim() &&
    phone.trim() &&
    password.trim() &&
    otp.trim() &&
    tempEmail &&
    !hasNameError &&
    !hasPhoneError &&
    !hasPasswordError &&
    !otpError;

  // If no temp email, redirect to email verification
  if (!tempEmail) {
    return null;
  }

  return (
    <ImageBackground source={Icons.background} style={styles.backgroundImage}>
      {isAndroid && <CustomStatusBar backgroundColor={Colors.background} />}
      <KeyboardAvoidingView
        behavior={isIOS ? 'padding' : undefined}
        style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ShadowCard style={styles.card}>
            <Text style={styles.title}>Complete Registration</Text>
            <Text style={styles.subtitle}>OTP sent to: {tempEmail}</Text>

            <FormInput
              label="Enter OTP"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChangeText={handleOtpChange}
              inputType="numeric"
              error={otpError}
              containerStyle={styles.otpContainer}
            />

            <ResendTimer
              onResend={handleResendOTP}
              isResending={isResending}
              initialTime={60}
            />

            <FormInput
              label="Email Address"
              value={tempEmail}
              onChangeText={() => {}} // Read-only
              inputType="email"
              style={styles.disabledInput}
              containerStyle={styles.disabledContainer}
            />

            <FormInput
              label="Full Name"
              placeholder="Enter your full name"
              value={name}
              onChangeText={setName}
              inputType="text"
              required
              onValidationChange={setHasNameError}
            />

            <FormInput
              label="Phone Number"
              placeholder="Enter your phone number"
              value={phone}
              onChangeText={setPhone}
              inputType="phoneNumber"
              required
              onValidationChange={setHasPhoneError}
            />

            <FormInput
              label="Password"
              placeholder="Create a strong password"
              value={password}
              onChangeText={setPassword}
              inputType="password"
              required
              onValidationChange={setHasPasswordError}
            />

            <PrimaryButton
              title={loading ? 'Creating Account...' : 'Create Account'}
              onPress={handleRegister}
              disabled={loading || !isFormValid}
            />

            <View style={styles.footer}>
              <Pressable
                onPress={() => navigation.navigate('EmailVerification')}>
                <Text style={styles.link}>Change Email Address</Text>
              </Pressable>
            </View>
          </ShadowCard>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default CompleteRegistrationScreen;
