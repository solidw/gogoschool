import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import Warning from 'src/lib/assets/alert.png';
import Icon from 'src/components/Icon';
import StyledText from 'src/components/StyledText';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';

const ChatbotScreen = ({ navigation }) => {
  return (
    <ChatbotScreenWrapper>
      <Icon source={Warning} />
      <StyledText>챗봇 기능은 현재 공사중입니다.</StyledText>
      <FullRowTouchableOpacity
        onPress={() => navigation.goBack()}
        background={palette.blackBoard}>
        <StyledText>돌아가기</StyledText>
      </FullRowTouchableOpacity>
    </ChatbotScreenWrapper>
  );
};

const ChatbotScreenWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

export default ChatbotScreen;
