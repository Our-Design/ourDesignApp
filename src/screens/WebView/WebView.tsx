/**
 * This screen will be used to open webview
 *
 * @module components/WebViewScreen
 * @memberof - View Component
 */
import React, {memo, useMemo, useState} from 'react';
import {View} from 'react-native';
import {WebView as RNWebView} from 'react-native-webview';
import {WebViewSource} from 'react-native-webview/lib/WebViewTypes';
import styles from './styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Colors, Spacing} from '../../styles/vars';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Text from '../../components/Text';

export interface SourceParams {
  source: {
    html?: string;
    uri?: string;
  };
  props?: any;
}

/**
 * Represents a WebViewScreen component.
 *
 * @component
 * @param {object} props - React properties passed from composition.
 * @param {string} [props.text] - The text to display inside the component.
 * @returns {JSX.Element} The rendered component.
 */
const WebViewScreen = ({route}: any) => {
  const {url: source, ...props} = route.params;
  const [showError, setShowError] = useState(false);

  // Handle WebView errors and log them
  const handleWebViewError = () => {
    setShowError(true);
  };

  // Handle HTTP errors
  const handleHttpError = () => {
    setShowError(true);
  };

  // Handle rendering process termination
  const handleRenderProcessGone = () => {
    setShowError(true);
  };

  const webViewSource = useMemo(() => {
    if (!source) {
      setShowError(true);
      return null;
    }

    if (typeof source === 'string') {
      return {uri: source};
    }
    if (typeof source === 'object') {
      return source;
    }

    return null;
  }, [source]);

  const insets = useSafeAreaInsets();

  if (showError || !webViewSource) {
    return (
      <View testID="webViewScreen" style={{paddingTop: insets.top}}>
        <Text style={styles.errorText}>"Invalid Url</Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, {paddingTop: insets.top}]}
      testID="webViewScreen">
      <CustomStatusBar
        backgroundColor={Colors.webViewBackground}
      />
      <RNWebView
        source={webViewSource as WebViewSource}
        onError={handleWebViewError}
        onHttpError={handleHttpError}
        onRenderProcessGone={handleRenderProcessGone}
        startInLoadingState
        javaScriptEnabled
        {...props}
      />
    </View>
  );
};

export default memo(WebViewScreen);
