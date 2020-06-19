import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';
import Icon from 'src/components/Icon';
import Warning from 'src/lib/assets/alert.png';

const ErrorScreen = () => {
  return (
    <ErrorScreenWrapper>
      <Icon source={Warning} />
      <StyledText center>데이터를 불러오는데 실패하였습니다.</StyledText>
    </ErrorScreenWrapper>
  );
};
const ErrorScreenWrapper = styled.View`
  flex: 1;
  background: ${palette.white};
  justify-content: center;
  align-items: center;
`;

export default ErrorScreen;
