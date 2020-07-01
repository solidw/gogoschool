import React, { useEffect, useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CalendarScreen from 'src/screens/tab/CalendarScreen';
import HomeStackNavigator from 'src/navigators/HomeStackNavigator';
import MyPageScreen from 'src/screens/tab/MyPageScreen';
import NoticeScreen from 'src/screens/tab/NoticeScreen';

import Icon from 'src/components/Icon';

import GPS from 'src/lib/assets/gps.png';
import Calendar from 'src/lib/assets/calendar.png';
import Home from 'src/lib/assets/home.png';
import Notice from 'src/lib/assets/notice.png';
import MyPage from 'src/lib/assets/user.png';
import Temperature from 'src/lib/assets/temperature.png';

import AsyncStorage from '@react-native-community/async-storage';
import { getFormatDate } from 'src/lib/Date';
import {
  defaultMissionValue,
  MissionContext,
} from 'src/contexts/MissionContext';
import { UserContext } from 'src/contexts/UserContext';
import { NoticeContext } from 'src/contexts/NoticeContext';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const { missionState, setMissionState } = useContext(MissionContext);
  const { notices, setNotices } = useContext(NoticeContext);
  const { user } = useContext(UserContext);
  useEffect(() => {
    const getMissions = () => {
      if (missionState.isLoaded === false) {
        const today = new Date();
        AsyncStorage.getItem('missions')
          .then(missions => {
            const parsedMissions = JSON.parse(missions);
            if (parsedMissions.date === getFormatDate(today)) {
              //같은 날은 그냥 불러오기
              setMissionState({
                ...parsedMissions,
                isLoaded: true,
              });
            } else {
              // 다른 날은 날짜 정해주고 기본값 불러오기
              setMissionState({
                ...defaultMissionValue,
                date: getFormatDate(today),
                isLoaded: true,
              });
            }
          })
          .catch(() => {
            setMissionState({
              ...defaultMissionValue,
              date: getFormatDate(today),
              isLoaded: true,
            });
          });
      }
    };
    user.isStudent && getMissions();
  }, [
    missionState.date,
    missionState.isLoaded,
    setMissionState,
    user.isStudent,
  ]);

  useEffect(() => {
    if (user.isStudent === false) {
      if (notices.isLoaded === false) {
        AsyncStorage.getItem('notices').then(notice => {
          const parsedNotice = JSON.parse(notice);
          setNotices({ isLoaded: true, noticeList: parsedNotice });
        });
      }
    }
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name === '홈') {
              iconName = Home;
            } else if (route.name === '동선') {
              iconName = GPS;
            } else if (route.name === '등교일') {
              iconName = Calendar;
            } else if (route.name === '날짜별 체온기록') {
              iconName = Temperature;
            } else if (route.name === '알림장') {
              iconName = Notice;
            } else if (route.name === '마이페이지') {
              iconName = MyPage;
            }
            return <Icon size={40} source={iconName} />; // ionIcon
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            height: '10%',
          },
          labelStyle: {
            fontFamily: 'baskin-robbins-R',
          },
        }}
        initialRouteName={'홈'}>
        <Tab.Screen
          name={user.isStudent ? '등교일' : '날짜별 체온기록'}
          component={CalendarScreen}
          initialParams={{ user: user }}
        />

        <Tab.Screen name="홈" component={HomeStackNavigator} />
        {user.isStudent === false && (
          <Tab.Screen
            name="알림장"
            component={NoticeScreen}
            initialParams={{ user: user }}
          />
        )}
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
