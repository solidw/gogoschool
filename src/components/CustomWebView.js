import React, { useState, useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components';
import AbsoluteIndicator from 'src/components/AbsoluteIndicator';
import { Platform, BackHandler } from 'react-native';

const CustomWebView = ({ uri, injectedJavaScript = '' }) => {
  const [visible, setVisible] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);
  const webViewRef = useRef();

  const zoomJsCode = `
    const meta = document.createElement('meta'); 
    meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0');
    meta.setAttribute('name', 'viewport');
    document.getElementsByTagName('head')[0].appendChild(meta);
  `;

  const zoomedInjectedJavascript = zoomJsCode + injectedJavaScript;

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
        injectedJavaScript={zoomedInjectedJavascript}
        javaScriptEnabledAndroid={true}
        onNavigationStateChange={onNavigationStateChange}
        scalesPageToFit={false}
      />
      {visible && <AbsoluteIndicator size="large" />}
    </CustomWebViewWrapper>
  );
};

const CustomWebViewWrapper = styled.View`
  flex: 1;
`;

export default CustomWebView;
