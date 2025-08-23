import React, {useState} from 'react';
import {
  View,
  Pressable,
  KeyboardAvoidingView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../store/slices/authSlice';
import FormInput from '../../components/FormInput';
import {AppDispatch} from '../../store';
import {useNavigation} from '@react-navigation/native';
import ShadowCard from '../../components/ShadowCard';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';
import Text from '../../components/Text';
import {isAndroid, isIOS} from '../../utils/platformHelper';
import Icons from '../../constants/icons';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Colors} from '../../styles/vars';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);

  const handleLogin = () => {
    if (!email || !password || hasEmailError || hasPasswordError) {
      return;
    }
    dispatch(login({email, password}));
  };

  return (
    <ImageBackground source={Icons.background} style={styles.backgroundImage}>
      {isAndroid && <CustomStatusBar backgroundColor={Colors.background} />}
      <KeyboardAvoidingView
        behavior={isIOS ? 'padding' : undefined}
        style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <ShadowCard style={styles.card}>
            <Text style={styles.title}>Login</Text>

            <FormInput
              label="Email Address"
              placeholder="Enter your email address"
              value={email}
              onChangeText={setEmail}
              inputType="email"
              required
              onValidationChange={setHasEmailError}
            />

            <FormInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              inputType="password"
              required
              onValidationChange={setHasPasswordError}
            />

            <PrimaryButton
              title="Login"
              onPress={handleLogin}
              disabled={
                !email || !password || hasEmailError || hasPasswordError
              }
            />

            <View style={styles.forgotPasswordContainer}>
              <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
              </Pressable>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>New to application?</Text>
              <Pressable
                onPress={() => navigation.navigate('EmailVerification')}>
                <Text style={styles.link}> Register</Text>
              </Pressable>
            </View>
          </ShadowCard>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Login;
