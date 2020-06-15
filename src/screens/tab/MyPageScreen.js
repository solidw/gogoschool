import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import Icon from 'src/components/Icon';
import StyledText from 'src/components/StyledText';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import ProfileIcon from 'src/lib/assets/profile-icon.png';
import { UserContext } from 'src/contexts/UserContext';
import { AuthContext } from 'src/contexts/AuthContext';
import { SIGN_OUT } from '../../contexts/reducers';
import AsyncStorage from '@react-native-community/async-storage';

const MyPageScreen = () => {
  const { user } = useContext(UserContext);
  const { dispatch } = useContext(AuthContext);

  return (
    <MyPageScreenWrapper>
      <HeaderInfoView>
        <Icon source={ProfileIcon} />
        <HeaderInfoText>{user.name}</HeaderInfoText>
      </HeaderInfoView>
      <DetailInfoView>
        <RowView>
          <RowText way={'left'}>학교명</RowText>
          <RowText way={'right'}>{user.school}</RowText>
        </RowView>
        <RowView>
          <RowText way={'left'}>학년</RowText>
          <RowText way={'right'}>{user.grade}</RowText>
        </RowView>
        <RowView>
          <RowText way={'left'}>반</RowText>
          <RowText way={'right'}>{user.classNo}</RowText>
        </RowView>
        <RowView>
          <RowText way={'left'}>번호</RowText>
          <RowText way={'right'}>{user.number}</RowText>
        </RowView>
        <RowView>
          <RowText way={'left'}>이름</RowText>
          <RowText way={'right'}>{user.name}</RowText>
        </RowView>
        <RowView>
          <RowText way={'left'}>인증번호</RowText>
          <RowText way={'right'}>{user.code}</RowText>
        </RowView>
      </DetailInfoView>
      <FullRowTouchableOpacity
        onPress={() => dispatch({ type: SIGN_OUT })}
        background={palette.hakgyoYellow}>
        <StyledText>로그아웃</StyledText>
      </FullRowTouchableOpacity>
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
  flex: 1;
  padding-vertical: 15px;
  padding-horizontal: 20px;
  justify-content: flex-start;
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
