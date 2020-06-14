import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';

import QRCode from 'react-native-qrcode-generator';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QRScreen = ({ route, navigation }) => {
  const { isStudent } = route.params;
  const [userInput, setUserInput] = useState('');
  const onReadEvent = ({ data }) => {
    navigation.push('AfterScan', { userCode: data });
  };
  return isStudent ? (
    <QRScreenWrapper>
      <TextInput
        defaultValue={userInput}
        placeholder={'Type String'}
        onChangeText={text => setUserInput(text)}
      />
      <Text>{userInput}</Text>
      <QRCode value={userInput} />
    </QRScreenWrapper>
  ) : (
    <QRScreenWrapper>
      <QRCodeScanner
        onRead={onReadEvent}
        cameraStyle={{ width: '100%', height: '50%' }}
        bottomContent={
          <TouchableOpacity>
            <StyledText>만약, 스캔이 잘 되지 않는다면</StyledText>
            <StyledText>
              하단의 홈을 누르고 다시 QR코드를 스캔해주세요.
            </StyledText>
          </TouchableOpacity>
        }
      />
    </QRScreenWrapper>
  );
};
const QRScreenWrapper = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;

export default QRScreen;
