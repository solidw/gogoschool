import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

import { AuthContext } from 'src/contexts/AuthContext';
import { UserContext } from 'src/contexts/UserContext';
import { SIGN_IN } from '../../contexts/reducers';
import axios from 'axios';

import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import FormData from 'src/components/FormData';
import StyledText from 'src/components/StyledText';

const LoginScreen = () => {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
  const [code, setCode] = useState();
  const serverUrl = `https://gogoschool.mybluemix.net/auth/login/${code}`;
  useEffect(() => {});
  return (
    <LoginScreenWrapper>
      <HeaderView>
        <StyledText size={30}>로그인</StyledText>
      </HeaderView>
      {/* <SomeView /> */}
      <FormData setValue={setCode} value={code} isLogin={true} />
      <FullRowTouchableOpacity
        text="로그인"
        onPress={() => {
          // axios.get(serverUrl).then(() => {
          auth.dispatch({ type: SIGN_IN, token: 'dummy' });
          user.loginWith('teacher');
          // });
        }}
        background={palette.blackBoard}
      />
    </LoginScreenWrapper>
  );
};
const LoginScreenWrapper = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;

const HeaderView = styled.View`
  padding: 20px;
  background-color: ${palette.blackBoard};
`;
const SomeView = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;
export default LoginScreen;
