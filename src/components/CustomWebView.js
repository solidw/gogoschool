import React, { useState, useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components';
import AbsoluteIndicator from 'src/components/AbsoluteIndicator';
import { Platform, BackHandler } from 'react-native';

const CustomWebView = ({ uri, injectedJavaScript }) => {
  const [visible, setVisible] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);
  const webViewRef = useRef();

  const onNavigationStateChange = navState => {
    setCanGoBack(navState.canGoBack);
  };

  const onBack = () => {
    if (canGoBack && webViewRef) {
      webViewRef.current.goBack();
      return true;
    }
  };

  useEffect(() => {
    let backHandler;
    if (Platform.OS === 'android') {
      backHandler = BackHandler.addEventListener('hardwareBackPress', onBack);
    }
    return () => backHandler.remove();
  });

  return (
    <CustomWebViewWrapper>
      <WebView
        ref={webViewRef}
        source={{ uri }}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabledAndroid={true}
        onNavigationStateChange={onNavigationStateChange}
      />
      {visible && <AbsoluteIndicator size="large" />}
    </CustomWebViewWrapper>
  );
};

const CustomWebViewWrapper = styled.View`
  flex: 1;
`;

export default CustomWebView;
