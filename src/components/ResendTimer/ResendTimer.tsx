import React, {useState, useEffect} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Text from '../Text';
import styles from './styles';

interface Props {
  initialTime?: number; // in seconds
  onResend: () => void;
  isResending?: boolean;
}

const ResendTimer: React.FC<Props> = ({
  initialTime = 60,
  onResend,
  isResending = false,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setIsActive(false);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, timeLeft]);

  const handleResend = () => {
    onResend();
    setTimeLeft(initialTime);
    setIsActive(true);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (timeLeft > 0) {
    return (
      <Text style={styles.timerText}>Resend OTP in {formatTime(timeLeft)}</Text>
    );
  }

  return (
    <Pressable
      onPress={handleResend}
      disabled={isResending}
      style={styles.resendButton}>
      <Text
        style={StyleSheet.flatten([
          styles.resendText,
          isResending && styles.disabledText,
        ])}>
        {isResending ? 'Resending...' : 'Resend OTP'}
      </Text>
    </Pressable>
  );
};

export default ResendTimer;
