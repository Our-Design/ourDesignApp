import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ImageBackground,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {forgotPassword} from '../../store/slices/authSlice';
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

const ForgotPasswordScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const {loading} = useSelector((state: RootState) => state.ui);

  const [email, setEmail] = useState('');
  const [hasEmailError, setHasEmailError] = useState(false);

  const handleSendResetEmail = async () => {
    if (!email || hasEmailError) {
      return;
    }

    try {
      await dispatch(forgotPassword(email)).unwrap();
      // After successful email sending, navigate back to login
      navigation.navigate('Login');
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
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>
            Enter your registered email address and we'll send you a temporary
            password
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
            title={loading ? 'Sending...' : 'Send Temporary Password'}
            onPress={handleSendResetEmail}
            disabled={loading || !email || hasEmailError}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Remember your password?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}> Login</Text>
            </Pressable>
          </View>
        </ShadowCard>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ForgotPasswordScreen;
