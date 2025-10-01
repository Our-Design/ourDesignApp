import VersionCheck from 'react-native-version-check';
import DeviceInfo from 'react-native-device-info';
import {isAndroid} from './platformHelper';
import APP_DETAILS from '../constants/app';

export interface UpdateInfo {
  needsUpdate: boolean;
  latestVersion: string | null;
  currentVersion: string | null;
  storeUrl?: string | null;
  isMandatory?: boolean;
  notes?: string;
}

/**
 * Check if an update is available on the App/Play Store using react-native-version-check.
 * Falls back to no-update on web.
 */
export const checkForStoreUpdate = async (): Promise<UpdateInfo> => {
  try {
    const androidPackage = APP_DETAILS.packageName;
    const iosAppID = APP_DETAILS.appID;
    const currentVersion = DeviceInfo.getVersion();

    let latestVersion: string | null = null;
    try {
      if (isAndroid) {
        latestVersion = await VersionCheck.getLatestVersion({
          provider: APP_DETAILS.androidProvider,
          packageName: androidPackage,
          country: APP_DETAILS.countryCode,
        });
      } else {
        latestVersion = await VersionCheck.getLatestVersion({
          provider: APP_DETAILS.iosProvider,
          country: APP_DETAILS.countryCode,
        });
      }
    } catch {
      latestVersion = null;
    }

    // Resolve store URL per platform with a safe fallback for Android
    let storeUrl: string | null = null;
    try {
      if (isAndroid) {
        storeUrl = await VersionCheck.getPlayStoreUrl({
          packageName: androidPackage,
        });
      } else {
        storeUrl = await VersionCheck.getAppStoreUrl({appID: iosAppID});
      }
    } catch {
      if (isAndroid) {
        storeUrl = `https://play.google.com/store/apps/details?id=${androidPackage}&hl=en_IN`;
      } else {
        storeUrl = iosAppID ? `https://apps.apple.com/app/id${iosAppID}` : null;
      }
    }

    // Compute needsUpdate by comparing semantic versions
    const compareVersions = (a: string, b: string) => {
      const pa = a.split('.').map(n => parseInt(n, 10) || 0);
      const pb = b.split('.').map(n => parseInt(n, 10) || 0);
      const len = Math.max(pa.length, pb.length);
      for (let i = 0; i < len; i += 1) {
        const na = pa[i] ?? 0;
        const nb = pb[i] ?? 0;
        if (na > nb) {
          return 1;
        }
        if (na < nb) {
          return -1;
        }
      }
      return 0;
    };

    const needsUpdate = !!(
      currentVersion &&
      latestVersion &&
      compareVersions(latestVersion, currentVersion) > 0
    );

    return {
      needsUpdate,
      latestVersion,
      currentVersion,
      storeUrl,
    };
  } catch (e) {
    return {
      needsUpdate: false,
      latestVersion: null,
      currentVersion: null,
      storeUrl: null,
    };
  }
};

/**
 * Placeholder: Will be implemented with OTA provider later (e.g., CodePush).
 */
export const checkForOTAUpdates = async (): Promise<boolean> => false; // placeholder

/**
 * Placeholder: Will be implemented with OTA provider later (e.g., CodePush).
 */
export const applyOTAUpdate = async (): Promise<void> => {
  // No-op for now
};
