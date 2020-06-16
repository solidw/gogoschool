import React, { useState, useContext } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';

import QRCode from 'react-native-qrcode-generator';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { UserContext } from 'src/contexts/UserContext';
import UserInfoFromAPI from 'src/components/UserInfoFromAPI';

const QRScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const { isStudent } = user;
  const [userInput, setUserInput] = useState('');

  const onReadEvent = ({ data }) => {
    navigation.push('AfterScan', { userCode: data });
  };

  return isStudent ? (
    <QRScreenWrapper>
      <UserInfoFromAPI userInfo={user} />
      <QRView>
        <QRCode size={256} value={userInput} />
      </QRView>
      {/* <FullRowTouchableOpacity
        onPress={() => navigation.push('Home')}
        background={palette.pastelRed}>
        <StyledText size={20} color={palette.white}>
          스스로 체온 기록하기
        </StyledText>
      </FullRowTouchableOpacity> */}
      <FullRowTouchableOpacity
        onPress={() => navigation.push('Home')}
        background={palette.hakgyoYellow}>
        <StyledText size={20}>뒤로가기</StyledText>
      </FullRowTouchableOpacity>
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
      <FullRowTouchableOpacity
        onPress={() => navigation.push('Home')}
        background={palette.blackBoard}>
        <StyledText>뒤로가기</StyledText>
      </FullRowTouchableOpacity>
    </QRScreenWrapper>
  );
};
const QRScreenWrapper = styled.View`
  flex: 1;
  background-color: ${palette.white};
  justify-content: center;
`;

const QRView = styled.View`
  flex: 1;
  align-items: center;
  margin-vertical: 20px;
`;
export default QRScreen;
