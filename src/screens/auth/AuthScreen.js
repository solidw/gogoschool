import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

import { AuthContext } from 'src/contexts/AuthContext';
import { UserContext } from 'src/contexts/UserContext';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import { SIGN_IN } from '../../contexts/reducers';

const AuthScreen = () => {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);

  return (
    <AuthScreenWrapper>
      <FullRowTouchableOpacity
        text="학생 로그인"
        onPress={() => {
          auth.dispatch({ type: SIGN_IN, token: 'dummy' });
          user.loginWith('student');
          console.log(auth, user);
        }}
      />
      <FullRowTouchableOpacity
        text="교사 로그인"
        onPress={() => {
          auth.dispatch({ type: SIGN_IN, token: 'dummy' });
          user.loginWith('teacher');
        }}
      />
    </AuthScreenWrapper>
  );
};
const AuthScreenWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

export default AuthScreen;
