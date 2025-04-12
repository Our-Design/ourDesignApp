/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

interface Props {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  inputType?: 'text' | 'email' | 'password' | 'phoneNumber';
  required?: boolean;
}

const FormInput: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onChangeText,
  inputType = 'text',
  required = false,
}) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    validate(value);
  }, [value]);

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
      : inputType === 'phoneNumber'
      ? 'phone-pad'
      : 'default';

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={[styles.input, !!error && styles.errorInput]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={inputType === 'password'}
        autoCapitalize="none"
        keyboardType={keyboardType}
      />

      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default FormInput;
