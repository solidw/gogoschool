import React, { useState } from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from 'src/screens/tab/MapScreen';
import CalendarScreen from 'src/screens/tab/CalendarScreen';
import SNSScreen from 'src/screens/tab/SNSScreen';
import NoticeScreen from 'src/screens/tab/NoticeScreen';
import ChatbotScreen from 'src/screens/tab/ChatbotScreen';
import HomeStackNavigator from 'src/navigators/HomeStackNavigator';
import Icon from 'src/components/Home/Icon';
import TabIcon from 'src/components/Home/TabIcon';

import GPS from 'src/lib/assets/gps.png';
import Calendar from 'src/lib/assets/calendar.png';
import Home from 'src/lib/assets/home.png';
import Chatbot from 'src/lib/assets/chatbot.png';
import Notice from 'src/lib/assets/notice.png';

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
            } else if (route.name === '챗봇') {
              iconName = Chatbot;
            }
            return <TabIcon source={iconName} />; // ionIcon
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        initialRouteName={'홈'}>
        <Tab.Screen name="동선" component={MapScreen} />
        <Tab.Screen
          name="등교일"
          component={CalendarScreen}
          initialParams={{ isStudent: true }}
        />
        <Tab.Screen
          name="홈"
          component={HomeStackNavigator}
          initialParams={{ isStudent: true }}
        />
        <Tab.Screen name="알림장" component={SNSScreen} />
        <Tab.Screen name="챗봇" component={ChatbotScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
