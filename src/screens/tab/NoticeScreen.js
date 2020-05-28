import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';
import styled from 'styled-components';

const NoticeScreen = () => {
  const [visible, setVisible] = useState(true);
  return (
    <NoticeView>
      <WebView
        source={{ uri: 'https://daily.gegdaegu.org/' }}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
      />
      {visible && <NoticeActivityIndicator size="large" />}
    </NoticeView>
  );
};

const NoticeView = styled.View`
  flex: 1;
`;

const NoticeActivityIndicator = styled.ActivityIndicator`
  flex: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
export default NoticeScreen;
