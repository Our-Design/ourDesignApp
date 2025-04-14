import React, { useEffect } from 'react';
import { Modal, View, Pressable, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { resetUI } from '../../store/slices/uiSlice';
import Toast from 'react-native-toast-message';
import styles from './styles';
import Text from '../Text';

const UILayer = () => {
  const { loading, error, success } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      Toast.show({
        type: 'success',
        text1: success,
      });
      dispatch(resetUI());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const isVisible = !!loading || !!error;

  return (
    <>
      <Modal transparent animationType="fade" visible={isVisible} statusBarTranslucent>
        <View style={styles.modalBackground}>
          {loading && (
            <View style={styles.loaderBox}>
              <ActivityIndicator size="large" color="#000" />
              <Text style={styles.loaderText}>Loading...</Text>
            </View>
          )}

          {error && (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>{error}</Text>
              <Pressable onPress={() => dispatch(resetUI())} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          )}
        </View>
      </Modal>
    </>
  );
};

export default UILayer;
