import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

import AnimatedProgressWheel from 'react-native-progress-wheel';
import { UserContext } from 'src/contexts/UserContext';
import HomeMiddleView from 'src/components/Home/HomeMiddleView';
import HomeFooterView from 'src/components/Home/HomeFooterView';
import dummyStudentExample from 'src/lib/dummyStudentExample';

import Icon from 'src/components/Home/Icon';
import StyledText from 'src/components/StyledText';

import TeacherLogin from 'src/lib/assets/teacher_login.png';
import StudentLogin from 'src/lib/assets/student_login.png';
import LogoLongLong from 'src/lib/assets/logo_long_long.png';
import Chatbot from 'src/lib/assets/chatbot.png';

import User from 'src/lib/assets/user.png';

const HomeScreen = ({ route, navigation }) => {
  const { user, toggleUser } = useContext(UserContext);
  const [wheelProgress, setWheelProgress] = useState(user.isStudent ? 0 : 19);
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth() + 1;
  const addPercentage = () => {
    setWheelProgress(wheelProgress < 100 ? wheelProgress + 25 : 0);
  };
  const { total, checked, student_list } = dummyStudentExample;
  return (
    <HomeScreenWrapper>
      <HeaderView>
        <TouchableOpacity
          onPress={() => toggleUser()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            size={60}
            source={user.isStudent ? StudentLogin : TeacherLogin}
          />
          <StyledText>{user.isStudent ? '학생' : '교사'}</StyledText>
        </TouchableOpacity>
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
          <Profile source={User} />
          <View style={{ transform: [{ rotate: '-90deg' }] }}>
            <AnimatedProgressWheel
              size={100}
              width={10}
              color={palette.hakgyoYellow}
              backgroundColor={palette.lightGray}
              progress={
                user.isStudent ? wheelProgress : (wheelProgress * 100) / total
              }
              animateFromValue={0}
              duration={3000}
            />
          </View>
          <ProgressText>
            {user.isStudent ? wheelProgress + '%' : `${checked} / ${total}`}
          </ProgressText>
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
  background-color: ${palette.hakgyoYellow};
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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-horizontal: 20px;
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
