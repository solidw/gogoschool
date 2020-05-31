import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styled from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainTabNavigator from 'src/navigators/MainTabNavigator';
import { UserContext } from 'src/contexts/UserContext';
import { AuthContext } from 'src/contexts/AuthContext';
import AuthScreen from 'src/screens/auth/AuthScreen';
import AuthStackNavigator from './navigators/AuthStackNavigator';

const Stack = createStackNavigator();

const AppWrapper = () => {
  const auth = useContext(AuthContext);
  return (
    <SafeAreaViewWrapper>
      {auth.authState.userToken === null ? (
        <AuthStackNavigator />
      ) : (
        <MainTabNavigator />
      )}
    </SafeAreaViewWrapper>
  );
};

const SafeAreaViewWrapper = styled.SafeAreaView`
  flex: 1;
`;

export default AppWrapper;
