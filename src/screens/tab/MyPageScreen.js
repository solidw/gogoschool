import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import Icon from 'src/components/Icon';
import StyledText from 'src/components/StyledText';

import ProfileIcon from 'src/lib/assets/profile-icon.png';

const MyPageScreen = () => {
  return (
    <MyPageScreenWrapper>
      <HeaderInfoView>
        <Icon source={ProfileIcon} />
        <HeaderInfoText>고태완</HeaderInfoText>
      </HeaderInfoView>
      <DetailInfoView>
        <RowView>
          <RowText way={'left'}>학교명</RowText>
          <RowText way={'right'}>송일초등학교</RowText>
        </RowView>
        <RowView>
          <RowText way={'left'}>학년</RowText>
          <RowText way={'right'}>1</RowText>
        </RowView>
        <RowView>
          <RowText way={'left'}>반</RowText>
          <RowText way={'right'}>1</RowText>
        </RowView>
        <RowView>
          <RowText way={'left'}>번호</RowText>
          <RowText way={'right'}>1</RowText>
        </RowView>
        <RowView>
          <RowText way={'left'}>이름</RowText>
          <RowText way={'right'}>고태완</RowText>
        </RowView>
        <RowView>
          <RowText way={'left'}>인증번호</RowText>
          <RowText way={'right'}>ABC123</RowText>
        </RowView>
      </DetailInfoView>
    </MyPageScreenWrapper>
  );
};

const MyPageScreenWrapper = styled.View`
  flex: 1;
  background-color: white;
`;

const HeaderInfoView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 15px;
  padding-horizontal: 20px;
  background-color: ${palette.hakgyoYellow};
`;

const HeaderInfoText = styled(StyledText)`
  font-size: 20px;
  padding-horizontal: 20px;
`;

const DetailInfoView = styled.View`
  padding-vertical: 15px;
  padding-horizontal: 20px;
  justify-content: center;
`;

const RowView = styled.View`
  flex-direction: row;
  border-radius: 8px;
  padding-vertical: 10px;
  border-bottom-width: 3px;
  border-bottom-color: gray;
`;

const RowText = styled(StyledText)`
  flex-basis: ${props => (props.way === 'left' ? '30%' : '50%')};
  text-align: ${props => (props.way === 'left' ? 'right' : 'center')};
  ${'' /* background-color: ${props =>
    props.way === 'left' ? palette.hakgyoGreen : 'transparent'}; */}
`;

export default MyPageScreen;
