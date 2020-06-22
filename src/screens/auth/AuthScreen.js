import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import Icon from 'src/components/Icon';
import StyledText from 'src/components/StyledText';

import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import LongLongLong from 'src/lib/assets/logo_long_long.png';

const AuthScreen = ({ navigation }) => {
  return (
    <AuthScreenWrapper>
      <IconView>
        <Icon size={200} source={LongLongLong} />
      </IconView>
      <FullRowTouchableOpacity
        onPress={() => {
          navigation.push('Login');
        }}
        background={palette.hakgyoYellow}>
        <StyledText size={20}>시작하기</StyledText>
      </FullRowTouchableOpacity>
    </AuthScreenWrapper>
  );
};
const AuthScreenWrapper = styled.View`
  flex: 1;
  justify-content: center;
  background-color: white;
`;

const IconView = styled.View`
  flex: 6;
  justify-content: center;
  align-items: center;
`;
export default AuthScreen;
