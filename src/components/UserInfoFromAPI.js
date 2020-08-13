import React from 'react';
import styled from 'styled-components';
import StyledText from 'src/components/StyledText';

const UserInfoFromAPI = ({ userInfo, size }) => {
  return (
    <UserInfoFromAPIWrapper>
      <StyledText center size={size}>{`${userInfo.school}`}</StyledText>
      <StyledText center size={size}>{`${userInfo.grade}학년 ${
        userInfo.classNo
      }반 ${userInfo.number}번`}</StyledText>
      <StyledText center size={size}>{`${userInfo.name}`}</StyledText>
    </UserInfoFromAPIWrapper>
  );
};
const UserInfoFromAPIWrapper = styled.View`
  margin-vertical: 20px;
`;

export default UserInfoFromAPI;
