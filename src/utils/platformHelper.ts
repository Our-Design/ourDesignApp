import {Platform, Dimensions} from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export {screenWidth, screenHeight};
