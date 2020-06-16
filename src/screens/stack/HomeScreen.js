import React, { useState, useContext, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import AnimatedProgressWheel from 'react-native-progress-wheel';

import { UserContext } from 'src/contexts/UserContext';

import HomeMiddleView from 'src/components/home/HomeMiddleView';
import HomeFooterView from 'src/components/home/HomeFooterView';
import Icon from 'src/components/Icon';
import StyledText from 'src/components/StyledText';

import dummyStudentExample from 'src/lib/dummyStudentExample';
import TeacherLogin from 'src/lib/assets/teacher_login.png';
import StudentLogin from 'src/lib/assets/student_login.png';
import LogoLongLong from 'src/lib/assets/logo_long_long.png';
import Chatbot from 'src/lib/assets/chatbot.png';

const HomeScreen = ({ navigation }) => {
  const { user, toggleUser } = useContext(UserContext);
  const { total, checked, student_list } = dummyStudentExample;
  const [wheelProgress, setWheelProgress] = useState(0);

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth() + 1;

  const addPercentage = () => {
    setWheelProgress(wheelProgress < 100 ? wheelProgress + 25 : 0);
  };

  useEffect(() => {
    setWheelProgress(user.isStudent ? 0 : checked);
  }, [checked, user.isStudent]);

  return (
    <HomeScreenWrapper>
      <HeaderView isStudent={user.isStudent}>
        <RowTouchableOpacity onPress={() => toggleUser()}>
          <Icon
            size={60}
            source={user.isStudent ? StudentLogin : TeacherLogin}
          />
          <StyledText>{user.isStudent ? '학생' : '교사'}</StyledText>
        </RowTouchableOpacity>
        <Icon size={120} source={LogoLongLong} />
        <TouchableOpacity onPress={() => navigation.push('Chatbot')}>
          <Icon size={60} source={Chatbot} />
        </TouchableOpacity>
      </HeaderView>
      <BodyView>
        <UserInfoView>
          <StyledText size={20}>{user.name}</StyledText>
          <StyledText size={20}>
            {user.isStudent
              ? todayDate % 2 === 0
                ? `${todayDate}일은 짝수날`
                : `${todayDate}일은 홀수날`
              : `${todayMonth}월 ${todayDate}일`}
          </StyledText>
        </UserInfoView>
        <ProgressView>
          {/* <Profile source={User} /> */}

          <View style={{ transform: [{ rotate: '-90deg' }] }}>
            <AnimatedProgressWheel
              size={100}
              width={15}
              color={user.isStudent ? palette.hakgyoYellow : palette.blackBoard}
              backgroundColor={palette.lightGray}
              progress={
                user.isStudent ? wheelProgress : wheelProgress * (100 / total)
              }
              animateFromValue={0}
              duration={3000}
            />
          </View>
          <StyledText size={30}>
            {user.isStudent ? wheelProgress + '%' : `${checked} / ${total}`}
          </StyledText>
        </ProgressView>
        <HomeMiddleView
          isStudent={user.isStudent}
          addPercentage={addPercentage}
          studentList={student_list}
        />
        <HomeFooterView isStudent={user.isStudent} navigation={navigation} />
      </BodyView>
    </HomeScreenWrapper>
  );
};

const HomeScreenWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${palette.white};
`;

const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding-horizontal: 10px;
  background-color: ${({ isStudent }) =>
    isStudent ? palette.hakgyoYellow : palette.blackBoard};
`;

const BodyView = styled.View`
  padding: 15px 10px;
  flex-grow: 1;
  ${'' /* background-color: ${palette.hakgyoGreen}; */}
`;

const UserInfoView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 8px;
`;

const ProgressView = styled.View`
  flex: 1;
  ${'' /* flex-direction: row; */}
  justify-content: space-around;
  align-items: center;
  margin-horizontal: 20px;
  margin-vertical: 10px;
`;

const RowTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const ProgressText = styled(StyledText)`
  position: absolute;
  right: 10%;
  font-size: 20px;
`;

const Profile = styled(Icon)`
  width: 50%;
  height: 50%;
`;
export default HomeScreen;
