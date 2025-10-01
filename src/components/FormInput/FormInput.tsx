import React, {useMemo, useState} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import Text from '../Text';
import {Colors} from '../../styles/vars';

interface Props {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  inputType?: 'text' | 'email' | 'password' | 'phoneNumber' | 'numeric';
  required?: boolean;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  error?: string | null;
  onValidationChange?: (hasError: boolean) => void;
}

const FormInput: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onChangeText,
  inputType = 'text',
  required = false,
  style,
  containerStyle,
  error: externalError,
  onValidationChange,
}) => {
  const [internalError, setInternalError] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordInput = inputType === 'password';

  const autoCompleteValue: TextInputProps['autoComplete'] = useMemo(() => {
    switch (inputType) {
      case 'email':
        return 'email';
      case 'phoneNumber':
        return 'tel';
      case 'password':
        return 'password';
      default:
        return 'off';
    }
  }, [inputType]);

  const textContentTypeValue: TextInputProps['textContentType'] =
    useMemo(() => {
      switch (inputType) {
        case 'email':
          return 'emailAddress';
        case 'phoneNumber':
          return 'telephoneNumber';
        case 'password':
          return 'password';
        default:
          return 'none';
      }
    }, [inputType]);

  // Use external error if provided, otherwise use internal error
  const displayError =
    externalError !== undefined ? externalError : internalError;

  const handleInputChange = (text: string) => {
    let formattedText = text;

    if (inputType === 'phoneNumber' || inputType === 'numeric') {
      formattedText = text.replace(/[^0-9]/g, '');
    }
    validate(formattedText);
    onChangeText(formattedText);
  };

  const validate = (text: string) => {
    // Only validate internally if no external error is provided
    if (externalError !== undefined) {
      return;
    }

    let hasError = false;

    if (required && !text) {
      setInternalError('This field is required');
      hasError = true;
    } else if (inputType === 'email' && text) {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(text)) {
        setInternalError('Invalid email format');
        hasError = true;
      }
    } else if (inputType === 'phoneNumber' && text) {
      const cleaned = text.replace(/\D/g, '');
      if (cleaned.length !== 10) {
        setInternalError('Phone number must be 10 digits');
        hasError = true;
      }
    } else if (inputType === 'password' && text) {
      if (text.length < 6) {
        setInternalError('Password must be at least 6 characters');
        hasError = true;
      }
    }

    if (!hasError) {
      setInternalError(null);
    }

    // Notify parent component about validation state
    onValidationChange?.(hasError);
  };

  const keyboardType =
    inputType === 'email'
      ? 'email-address'
      : inputType === 'phoneNumber' || inputType === 'numeric'
      ? 'numeric'
      : 'default';

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputWrapper}>
        <TextInput
          style={[
            styles.input,
            style,
            !!displayError && styles.errorInput,
            isPasswordInput && styles.passwordInput,
          ]}
          placeholder={placeholder}
          placeholderTextColor={Colors.subText}
          value={value}
          onChangeText={handleInputChange}
          secureTextEntry={isPasswordInput && !isPasswordVisible}
          autoCapitalize="none"
          autoCorrect={isPasswordInput ? false : undefined}
          keyboardType={keyboardType}
          textContentType={textContentTypeValue}
          autoComplete={autoCompleteValue}
          selectionColor={Colors.primary}
        />

        {isPasswordInput && (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={
              isPasswordVisible ? 'Hide password' : 'Show password'
            }
            onPress={() => setIsPasswordVisible(prev => !prev)}
            style={styles.passwordToggle}>
            <Text style={styles.passwordToggleText}>
              {isPasswordVisible ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {!!displayError && <Text style={styles.errorText}>{displayError}</Text>}
    </View>
  );
};

export default FormInput;
