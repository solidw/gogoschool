import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';

const UserInfoFromAPI = ({ userInfo, size }) => {
  return (
    <UserInfoFromAPIWrapper>
      <CenteredText size={size}>{`${userInfo.school}`}</CenteredText>
      <CenteredText size={size}>{`${userInfo.grade}학년 ${userInfo.classNo}반 ${
        userInfo.number
      }번`}</CenteredText>
      <CenteredText size={size}>{`${userInfo.name}`}</CenteredText>
    </UserInfoFromAPIWrapper>
  );
};
const UserInfoFromAPIWrapper = styled.View`
  margin-vertical: 20px;
`;

const CenteredText = styled(StyledText)`
  font-size: 20px;
  text-align: center;
`;
export default UserInfoFromAPI;
