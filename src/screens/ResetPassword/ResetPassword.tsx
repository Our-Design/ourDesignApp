import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {resetPassword, logout} from '../../store/slices/authSlice';
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

const ResetPasswordScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const {loading} = useSelector((state: RootState) => state.ui);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hasOldPasswordError, setHasOldPasswordError] = useState(false);
  const [hasNewPasswordError, setHasNewPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    if (text && newPassword && text !== newPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError(null);
    }
  };

  const handleResetPassword = async () => {
    if (
      !oldPassword ||
      !newPassword ||
      !confirmPassword ||
      hasOldPasswordError ||
      hasNewPasswordError ||
      confirmPasswordError
    ) {
      return;
    }

    if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    try {
      await dispatch(
        resetPassword({oldPassword, newPassword, confirmPassword}),
      ).unwrap();

      // Logout user immediately after successful password reset
      await dispatch(logout());
      navigation.navigate('Login');
    } catch (error) {
      // Error handling is done in the thunk
    }
  };

  const isFormValid =
    oldPassword.trim() &&
    newPassword.trim().length >= 6 &&
    confirmPassword.trim() &&
    newPassword === confirmPassword &&
    !hasOldPasswordError &&
    !hasNewPasswordError &&
    !confirmPasswordError;

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
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>
              Enter the temporary password sent to your email and create a new
              password
            </Text>

            <FormInput
              label="Temporary Password"
              placeholder="Enter temporary password from email"
              value={oldPassword}
              onChangeText={setOldPassword}
              inputType="password"
              required
              onValidationChange={setHasOldPasswordError}
            />

            <FormInput
              label="New Password"
              placeholder="Enter new password"
              value={newPassword}
              onChangeText={setNewPassword}
              inputType="password"
              required
              onValidationChange={setHasNewPasswordError}
            />

            <FormInput
              label="Confirm New Password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              inputType="password"
              required
              error={confirmPasswordError}
            />

            <PrimaryButton
              title={loading ? 'Resetting...' : 'Reset Password'}
              onPress={handleResetPassword}
              disabled={loading || !isFormValid}
            />

            <View style={styles.footer}>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Back to Login</Text>
              </Pressable>
            </View>
          </ShadowCard>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ResetPasswordScreen;
