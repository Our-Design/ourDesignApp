
import React, {  useState } from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';
import Text from '../Text';

interface Props {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  inputType?: 'text' | 'email' | 'password' | 'phoneNumber' | 'numeric';
  required?: boolean;
  style?: object;
  containerStyle?: object;
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
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (text:string) => {
    let formattedText = text;

    if (inputType === 'phoneNumber' || inputType === 'numeric') {
      formattedText = text.replace(/[^0-9]/g, '');
    }
    validate(formattedText);
    onChangeText(formattedText);
  };

  const validate = (text: string) => {
    if (required && !text) {
      setError('This field is required');
      return;
    }

    if (inputType === 'email' && text) {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(text)) {
        setError('Invalid email format');
        return;
      }
    }

    if (inputType === 'phoneNumber' && text) {
      const cleaned = text.replace(/\D/g, '');
      if (cleaned.length !== 10) {
        setError('Phone number must be 10 digits');
        return;
      }
    }

    if (inputType === 'password' && text) {
      if (text.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
      // Optional: add more checks for strength
    }

    setError(null);
  };

  const keyboardType =
    inputType === 'email'
      ? 'email-address'
      : inputType === 'phoneNumber' || inputType === 'numeric'
      ? 'numeric'
      : 'default';

  return (
    <View style={[styles.container,containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={[styles.input, style, !!error && styles.errorInput]}
        placeholder={placeholder}
        value={value}
        onChangeText={handleInputChange}
        secureTextEntry={inputType === 'password'}
        autoCapitalize="none"
        keyboardType={keyboardType}
      />

      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default FormInput;
