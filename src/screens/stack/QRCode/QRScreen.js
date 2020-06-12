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

import QRCode from 'react-native-qrcode-generator';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QRScreen = ({ route, navigation }) => {
  const { isStudent } = route.params;
  const [userInput, setUserInput] = useState('');
  const onReadEvent = () => {};
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
    <QRCodeScanner
      onRead={code => navigation.push('AfterScan', { userCode: code })}
      topContent={<Text>gogoschool QRCode</Text>}
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
    />
  );
};
const QRScreenWrapper = styled.View`
  flex: 1;
`;

const QRScreenUserInput = styled.TextInput``;
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
export default QRScreen;
