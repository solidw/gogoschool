import React, { useState, useContext, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import AnimatedProgressWheel from 'react-native-progress-wheel';

import { UserContext } from 'src/contexts/UserContext';
import { MissionContext } from 'src/contexts/MissionContext';
import { NoticeContext } from 'src/contexts/NoticeContext';

import HomeMiddleView from 'src/components/home/HomeMiddleView';
import HomeFooterView from 'src/components/home/HomeFooterView';
import Icon from 'src/components/Icon';
import StyledText from 'src/components/StyledText';

import TeacherLogin from 'src/lib/assets/teacher_login.png';
import StudentLogin from 'src/lib/assets/student_login.png';
import LogoLongLong from 'src/lib/assets/logo_long_long.png';
import Chatbot from 'src/lib/assets/chatbot.png';
import { getStudentDoesSelfcheckOrNot } from 'src/apis/user';

const HomeScreen = ({ route, navigation }) => {
  const { user, toggleUser } = useContext(UserContext);
  const { missionState } = useContext(MissionContext);
  const [selfcheckInfo, setSelfcheckInfo] = useState({
    total: 1,
    checked: 0,
    studentList: [],
  });
  const [infoLoaded, setInfoLoaded] = useState(false);
  const studentProgress = (100 / missionState.length) * missionState.isComplete;
  const [wheelProgress, setWheelProgress] = useState(0);
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth() + 1;
  const { notices } = useContext(NoticeContext);
  const addPercentage = () => {
    setWheelProgress(wheelProgress < 100 ? wheelProgress + 25 : 0);
  };

  useEffect(() => {
    if (user.isStudent) {
      setWheelProgress(studentProgress);
      setInfoLoaded(true);
    }
  }, [studentProgress, user.isStudent]);

  useEffect(() => {
    const asyncGetSelfcheckInfo = async () => {
      console.log('@asyncGetSelfcheckInfo: ');
      if (user.isStudent === false) {
        const [status, data] = await getStudentDoesSelfcheckOrNot({
          teacherCode: user.code,
        });
        if (status === 200) {
          setWheelProgress(data.checked);
          setSelfcheckInfo({
            total: data.total,
            checked: data.checked,
            studentList: data.studentList,
          });
          setInfoLoaded(true);
        }
      }
    };

    asyncGetSelfcheckInfo();
  }, [user.code, user.isStudent, notices]);

  const moveToStudentDetail = () => {
    navigation.push('MyStudentDetail', { selfcheckInfo: selfcheckInfo });
  };

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
          {infoLoaded === false ? (
            <StyledText>정보를 불러오는 중입니다.</StyledText>
          ) : (
            <>
              <View style={{ transform: [{ rotate: '-90deg' }] }}>
                <AnimatedProgressWheel
                  size={100}
                  width={15}
                  color={
                    user.isStudent ? palette.hakgyoYellow : palette.blackBoard
                  }
                  backgroundColor={palette.lightGray}
                  progress={
                    user.isStudent
                      ? wheelProgress
                      : wheelProgress * (100 / selfcheckInfo.total)
                  }
                  animateFromValue={0}
                  duration={3000}
                />
              </View>
              <StyledText size={30}>
                {user.isStudent
                  ? wheelProgress + '%'
                  : `${selfcheckInfo.checked} / ${selfcheckInfo.total}`}
              </StyledText>
            </>
          )}
        </ProgressView>
        <HomeMiddleView
          isStudent={user.isStudent}
          addPercentage={addPercentage}
          studentList={user.isStudent === false && selfcheckInfo.studentList}
          moveToStudentDetail={moveToStudentDetail}
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
`;

const UserInfoView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 8px;
`;

const ProgressView = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin-horizontal: 20px;
  margin-vertical: 10px;
`;

const RowTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export default HomeScreen;
