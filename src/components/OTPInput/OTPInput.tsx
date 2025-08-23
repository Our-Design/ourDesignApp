import React, {useRef, useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import Text from '../Text';
import styles from './styles';

interface Props {
  length?: number;
  value: string;
  onChange: (otp: string) => void;
  error?: string | null;
  autoFocus?: boolean;
}

const OTPInput: React.FC<Props> = ({
  length = 6,
  value,
  onChange,
  error,
  autoFocus = true,
}) => {
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(
    autoFocus ? 0 : null,
  );

  const handleChangeText = (text: string, index: number) => {
    // Only allow numbers
    const cleanedText = text.replace(/[^0-9]/g, '');

    if (cleanedText.length > 1) {
      // Handle paste scenario
      const pastedOTP = cleanedText.slice(0, length);
      onChange(pastedOTP);

      // Focus on the last filled input or the next empty one
      const nextIndex = Math.min(pastedOTP.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
      setFocusedIndex(nextIndex);
      return;
    }

    // Single character input
    const newOTP = value.split('');
    newOTP[index] = cleanedText;

    // Fill array to proper length
    while (newOTP.length < length) {
      newOTP.push('');
    }

    onChange(newOTP.join(''));

    // Move to next input if character was entered
    if (cleanedText && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      setFocusedIndex(index + 1);
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !value[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
      setFocusedIndex(index - 1);
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  const handlePress = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {Array.from({length}, (_, index) => (
          <Pressable key={index} onPress={() => handlePress(index)}>
            <TextInput
              ref={ref => {
                inputRefs.current[index] = ref;
              }}
              style={[
                styles.input,
                focusedIndex === index && styles.focusedInput,
                !!error && styles.errorInput,
              ]}
              value={value[index] || ''}
              onChangeText={text => handleChangeText(text, index)}
              onKeyPress={({nativeEvent}) =>
                handleKeyPress(nativeEvent.key, index)
              }
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
              selectTextOnFocus
              autoFocus={autoFocus && index === 0}
            />
          </Pressable>
        ))}
      </View>
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default OTPInput;
