import {useCallback, useEffect, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import {
  applyOTAUpdate,
  checkForOTAUpdates,
  checkForStoreUpdate,
  UpdateInfo,
} from '../utils/updateHelper';

interface UseUpdateCheckOptions {
  checkOnMount?: boolean;
  checkOnForeground?: boolean;
}

export const useUpdateCheck = ({
  checkOnMount = true,
  checkOnForeground = true,
}: UseUpdateCheckOptions = {}) => {
  const [storeUpdateInfo, setStoreUpdateInfo] = useState<UpdateInfo | null>(
    null,
  );
  const [showStoreModal, setShowStoreModal] = useState(false);
  const [showOTAModal, setShowOTAModal] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const checkForUpdates = useCallback(async () => {
    setIsChecking(true);
    try {
      const updateInfo = await checkForStoreUpdate();
      setStoreUpdateInfo(updateInfo);

      if (updateInfo.needsUpdate) {
        setShowStoreModal(true);
        return;
      }

      const hasOTAUpdate = await checkForOTAUpdates();
      if (hasOTAUpdate) {
        setShowOTAModal(true);
      }
    } catch (error) {
      console.error('Update check failed:', error);
    } finally {
      setIsChecking(false);
    }
  }, []);

  const handleOTAUpdate = async () => {
    try {
      await applyOTAUpdate();
    } catch (error) {
      console.error('OTA update failed:', error);
    }
  };

  useEffect(() => {
    if (!checkOnMount) {
      return undefined;
    }
    const timer = setTimeout(checkForUpdates, 2000);
    return () => clearTimeout(timer);
  }, [checkOnMount, checkForUpdates]);

  useEffect(() => {
    if (!checkOnForeground) {
      return undefined;
    }

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active') {
        checkForUpdates();
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => subscription.remove();
  }, [checkOnForeground, checkForUpdates]);

  return {
    storeUpdateInfo,
    showStoreModal,
    showOTAModal,
    isChecking,
    checkForUpdates,
    handleOTAUpdate,
  };
};
