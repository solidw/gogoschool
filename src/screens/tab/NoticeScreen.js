import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import StyledText from 'src/components/StyledText';
import palette from 'src/lib/palette';

import { UserContext } from 'src/contexts/UserContext';
const NoticeScreen = ({ params }) => {
  const { user } = useContext(UserContext);
  return (
    <NoticeScreenWrapper>
      <HeaderView>
        <StyledText>알림</StyledText>
      </HeaderView>
      <Text>NoticeScreen</Text>
    </NoticeScreenWrapper>
  );
};
const NoticeScreenWrapper = styled.View`
  flex: 1;
  background: ${palette.white};
`;

const HeaderView = styled.View`
  padding-vertical: 20px;
`;

export default NoticeScreen;
