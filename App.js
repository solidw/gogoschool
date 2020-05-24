import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from 'src/screen/HomeScreen';
import MyInfoScreen from 'src/screen/MyInfoScreen';
import CalendarScreen from 'src/screen/CalendarScreen';
import styled from 'styled-components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaViewWrapper>
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
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="MyInfo" component={MyInfoScreen} />
          <Tab.Screen name="Calendar" component={CalendarScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaViewWrapper>
  );
};

const SafeAreaViewWrapper = styled.SafeAreaView`
  flex: 1;
`;

export default App;
