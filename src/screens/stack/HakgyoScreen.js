import React, { useState, useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components';
import AbsoluteIndicator from 'src/components/AbsoluteIndicator';
import { Platform, BackHandler } from 'react-native';

const HakgyoScreen = () => {
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
    <HakgyoScreenWrapper>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://gogo.school' }}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
        onNavigationStateChange={onNavigationStateChange}
      />
      {visible && <AbsoluteIndicator size="large" />}
    </HakgyoScreenWrapper>
  );
};

const HakgyoScreenWrapper = styled.View`
  flex: 1;
`;
export default HakgyoScreen;
