import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';
import styled from 'styled-components';

const HakgyoScreen = () => {
  const [visible, setVisible] = useState(true);
  return (
    <HakgyoView>
      <WebView
        source={{ uri: 'https://daily.gegdaegu.org/' }}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
      />
      {visible && <HakgyoActivityIndicator size="large" />}
    </HakgyoView>
  );
};

const HakgyoView = styled.View`
  flex: 1;
`;

const HakgyoActivityIndicator = styled.ActivityIndicator`
  flex: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
export default HakgyoScreen;
