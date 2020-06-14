import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

import axios from 'axios';

import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import FormData from 'src/components/FormData';
import StyledText from 'src/components/StyledText';

const RegisterScreen = () => {
  const [isStudent, setStudent] = useState(true);
  const [registerData, setRegisterData] = useState({});
  const serverUrl = 'https://gogoschool.mybluemix.net/auth/register';
  useEffect(() => {});
  return (
    <RegisterScreenWrapper>
      <HeaderView isStudent={isStudent}>
        <StyledText size={30}>{`회원가입_${
          isStudent ? '학생' : '교사'
        }`}</StyledText>
      </HeaderView>
      <FormData
        setValue={setRegisterData}
        value={registerData}
        isLogin={false}
        isStudent={isStudent}
        setStudent={setStudent}
      />
      <FullRowTouchableOpacity
        onPress={() => {
          // axios.post(serverUrl).then(() => {});
        }}
        background={isStudent ? palette.hakgyoYellow : palette.blackBoard}>
        <StyledText size={20}>회원가입</StyledText>
      </FullRowTouchableOpacity>
    </RegisterScreenWrapper>
  );
};
const RegisterScreenWrapper = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;

const HeaderView = styled.View`
  padding: 20px;
  background-color: ${({ isStudent }) =>
    isStudent ? palette.hakgyoYellow : palette.blackBoard};
`;
export default RegisterScreen;
