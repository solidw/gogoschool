import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import Icon from 'src/components/Icon';
import StyledText from 'src/components/StyledText';

import { AuthContext } from 'src/contexts/AuthContext';
import { UserContext } from 'src/contexts/UserContext';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import LongLongLong from 'src/lib/assets/logo_long_long.png';
import { SIGN_IN } from '../../contexts/reducers';

const AuthScreen = ({ navigation }) => {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);

  return (
    <AuthScreenWrapper>
      <IconView>
        <Icon size={200} source={LongLongLong} />
      </IconView>
      <FullRowTouchableOpacity
        onPress={() => {
          navigation.push('Login');
        }}
        background={palette.blackBoard}>
        <StyledText size={20}>로그인</StyledText>
      </FullRowTouchableOpacity>
      <FullRowTouchableOpacity
        text="회원가입"
        onPress={() => {
          navigation.push('Register');
        }}
        background={palette.hakgyoYellow}>
        <StyledText size={20}>회원가입</StyledText>
      </FullRowTouchableOpacity>
    </AuthScreenWrapper>
  );
};
const AuthScreenWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const IconView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export default AuthScreen;
