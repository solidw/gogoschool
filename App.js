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
import styled from 'styled-components';

import MainTabNavigator from 'src/screens/MainTabNavigator';
import UserContextProvider from 'src/contexts/UserContext';

const App = () => {
  const [user, setUser] = useState({ isStudent: true });
  return (
    <UserContextProvider>
      <SafeAreaViewWrapper>
        <MainTabNavigator />
      </SafeAreaViewWrapper>
    </UserContextProvider>
  );
};

const SafeAreaViewWrapper = styled.SafeAreaView`
  flex: 1;
`;

export default App;
