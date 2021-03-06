import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';

const MyStudentDetailScreen = ({ route }) => {
  return (
    <MyStudentDetailScreenWrapper>
      <HeaderView>
        <StyledText>학생 자가진단 여부 </StyledText>
      </HeaderView>
      <Text>MyStudentDetailScreenScreen</Text>
    </MyStudentDetailScreenWrapper>
  );
};
const MyStudentDetailScreenWrapper = styled.View`
  flex: 1;
  background: ${palette.white};
`;

const HeaderView = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  background: ${palette.blackBoard};
`;

const RowView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export default MyStudentDetailScreen;
