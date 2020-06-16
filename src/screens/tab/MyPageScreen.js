import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import Icon from 'src/components/Icon';
import StyledText from 'src/components/StyledText';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import ProfileIcon from 'src/lib/assets/profile-icon.png';
import { UserContext } from 'src/contexts/UserContext';
import { AuthContext } from 'src/contexts/AuthContext';
import { SIGN_OUT } from '../../contexts/reducers';

const MyPageScreen = () => {
  const { user } = useContext(UserContext);
  const { authState, dispatch } = useContext(AuthContext);

  const alertLogout = () => {
    Alert.alert(
      '로그아웃 확인',
      '정말 로그아웃 하시겠습니까?',
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: () => {
            dispatch({ type: SIGN_OUT });
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <MyPageScreenWrapper>
      <HeaderInfoView isStudent={user.isStudent}>
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
      <StyledText size={20} margin={20}>
        잘못된 정보를 입력했을 경우 로그아웃을 통해 다시 로그인해주세요.
      </StyledText>
      <FullRowTouchableOpacity
        onPress={alertLogout}
        background={user.isStudent ? palette.hakgyoYellow : palette.blackBoard}>
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
  background-color: ${({ isStudent }) =>
    isStudent ? palette.hakgyoYellow : palette.blackBoard};
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

const RowButton = styled.TouchableOpacity`
  flex-basis: ${props => (props.way === 'left' ? '30%' : '50%')};
  text-align: ${props => (props.way === 'left' ? 'right' : 'center')};

  ${'' /* background-color: ${props =>
    props.way === 'left' ? palette.hakgyoGreen : 'transparent'}; */}
`;

export default MyPageScreen;
