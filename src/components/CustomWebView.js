import React, { useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import styled from 'styled-components';
import AbsoluteIndicator from 'src/components/AbsoluteIndicator';

const CustomWebView = ({ uri }) => {
  const [visible, setVisible] = useState(true);
  return (
    <CustomWebViewWrapper>
      <WebView
        source={{ uri }}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
      />
      {visible && <AbsoluteIndicator size="large" />}
    </CustomWebViewWrapper>
  );
};

const CustomWebViewWrapper = styled.View`
  flex: 1;
`;

export default CustomWebView;
