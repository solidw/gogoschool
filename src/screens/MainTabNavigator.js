import React, { useState } from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from 'src/screens/tab/MapScreen';
import CalendarScreen from 'src/screens/tab/CalendarScreen';
import SNSScreen from 'src/screens/tab/SNSScreen';
import NoticeScreen from 'src/screens/tab/NoticeScreen';
import HomeStackNavigator from 'src/screens/tab/HomeStackNavigator';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'android-information-circle'
                : 'android-information-circle-outline';
            } else if (route.name === 'MyInfo') {
              iconName = focused ? 'android-list-box' : 'android-list';
            }
            return <Image name={iconName} size={size} color={color} />; // ionIcon
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        initialRouteName={'홈'}>
        <Tab.Screen name="지도" component={MapScreen} />
        <Tab.Screen
          name="달력"
          component={CalendarScreen}
          initialParams={{ isStudent: true }}
        />
        <Tab.Screen
          name="홈"
          component={HomeStackNavigator}
          initialParams={{ isStudent: true }}
        />
        <Tab.Screen name="인스타그램" component={SNSScreen} />
        <Tab.Screen name="공지사항" component={NoticeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
