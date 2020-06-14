import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';
import Icon from 'src/components/Icon';
import StyledText from 'src/components/StyledText';

import QRCode from 'src/lib/assets/qrcode.png';
import BlackBoard from 'src/lib/assets/blackboard.png';
import Check from 'src/lib/assets/check.png';
import Alert from 'src/lib/assets/alert.png';
import Quiz from 'src/lib/assets/quiz.png';
// import Logo from 'src/lib/assets/logo.png';
const HomeFooterView = ({ isStudent, navigation }) => {
  return isStudent ? (
    <StudentFooterView navigation={navigation} />
  ) : (
    <TeacherFooterView navigation={navigation} />
  );
};

const StudentFooterView = ({ navigation }) => {
  return (
    <FooterView>
      <MenuButton
        onPress={() => navigation.push('QRCode', { isStudent: true })}>
        <Icon size={70} source={QRCode} />
        <ButtonText>QR코드</ButtonText>
      </MenuButton>
      <MenuButton onPress={() => navigation.push('Hakgyo')}>
        <Icon size={70} source={BlackBoard} />
        <ButtonText>학교가자</ButtonText>
      </MenuButton>
      <MenuButton onPress={() => navigation.push('Third')}>
        <Icon size={70} source={Check} />
        <ButtonText>자가진단</ButtonText>
      </MenuButton>
      <MenuButton onPress={() => navigation.push('Fourth')}>
        <Icon size={70} source={Quiz} />
        <ButtonText>안전상식</ButtonText>
      </MenuButton>
    </FooterView>
  );
};

const TeacherFooterView = ({ navigation }) => {
  return (
    <FooterView>
      <MenuButton
        onPress={() => navigation.push('QRCode', { isStudent: false })}>
        <Icon size={70} source={QRCode} />
        <ButtonText>QR코드</ButtonText>
      </MenuButton>
      <MenuButton onPress={() => navigation.push('Hakgyo')}>
        <Icon size={70} source={BlackBoard} />
        <ButtonText>학교가자</ButtonText>
      </MenuButton>
      <MenuButton onPress={() => navigation.push('Third')}>
        <Icon size={70} source={Check} />
        <ButtonText>진단확인</ButtonText>
      </MenuButton>
      <MenuButton onPress={() => navigation.push('Fourth')}>
        <Icon size={70} source={Alert} />
        <ButtonText>비상메뉴얼</ButtonText>
      </MenuButton>
    </FooterView>
  );
};

const FooterView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 10px;
`;

const MenuButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(StyledText)`
  font-size: 15px;
  margin-vertical: 5px;
`;
export default HomeFooterView;
