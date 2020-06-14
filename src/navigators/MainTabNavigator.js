import React, { useState } from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from 'src/screens/tab/MapScreen';
import CalendarScreen from 'src/screens/tab/CalendarScreen';
import SNSScreen from 'src/screens/tab/SNSScreen';
import HomeStackNavigator from 'src/navigators/HomeStackNavigator';
import MyPageScreen from 'src/screens/tab/MyPageScreen';

import Icon from 'src/components/Icon';

import GPS from 'src/lib/assets/gps.png';
import Calendar from 'src/lib/assets/calendar.png';
import Home from 'src/lib/assets/home.png';
import Notice from 'src/lib/assets/notice.png';
import MyPage from 'src/lib/assets/user.png';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === '홈') {
              iconName = Home;
            } else if (route.name === '동선') {
              iconName = GPS;
            } else if (route.name === '등교일') {
              iconName = Calendar;
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
        <Tab.Screen name="동선" component={MapScreen} />
        <Tab.Screen name="등교일" component={CalendarScreen} />
        <Tab.Screen name="홈" component={HomeStackNavigator} />
        <Tab.Screen name="알림장" component={SNSScreen} />
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
