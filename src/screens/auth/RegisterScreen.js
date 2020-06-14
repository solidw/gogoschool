import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

import axios from 'axios';

import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import FormData from 'src/components/FormData';
import StyledText from 'src/components/StyledText';

const RegisterScreen = () => {
  const [registerData, setRegisterData] = useState({});
  const serverUrl = 'https://gogoschool.mybluemix.net/auth/register';
  useEffect(() => {});
  return (
    <RegisterScreenWrapper>
      <HeaderView>
        <StyledText size={30}>회원가입</StyledText>
      </HeaderView>
      <FormData
        setValue={setRegisterData}
        value={registerData}
        isLogin={false}
      />
      <FullRowTouchableOpacity
        onPress={() => {
          // axios.post(serverUrl).then(() => {});
        }}
        background={palette.hakgyoYellow}>
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
  background-color: ${palette.hakgyoYellow};
`;
export default RegisterScreen;
