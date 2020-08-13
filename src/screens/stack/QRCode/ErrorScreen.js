import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';
import Icon from 'src/components/Icon';
import Warning from 'src/lib/assets/alert.png';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';

const ErrorScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <ErrorScreenWrapper>
      <Icon source={Warning} />
      <StyledText center>데이터를 불러오는데 실패하였습니다.</StyledText>
      <FullRowTouchableOpacity
        onPress={() => navigation.pop()}
        background={palette.blackBoard}>
        <StyledText>돌아가기</StyledText>
      </FullRowTouchableOpacity>
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
