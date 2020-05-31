import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

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
      <TouchableOpacity
        onPress={() => navigation.push('QRCode', { isStudent: true })}>
        <Text>QR코드</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Hakgyo')}>
        <Text>학교가자</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Third')}>
        <Text>자가진단</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Fourth')}>
        <Text>퀴즈</Text>
      </TouchableOpacity>
    </FooterView>
  );
};

const TeacherFooterView = ({ navigation }) => {
  return (
    <FooterView>
      <TouchableOpacity
        onPress={() => navigation.push('QRCode', { isStudent: false })}>
        <Text>QR코드</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Hakgyo')}>
        <Text>학교가자</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Third')}>
        <Text>Emergency</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Fourth')}>
        <Text>Safety</Text>
      </TouchableOpacity>
    </FooterView>
  );
};

const FooterView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 10px;
`;

export default HomeFooterView;
