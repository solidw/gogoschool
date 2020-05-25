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

const App = () => {
  return (
    <SafeAreaViewWrapper>
      <MainTabNavigator />
    </SafeAreaViewWrapper>
  );
};

const SafeAreaViewWrapper = styled.SafeAreaView`
  flex: 1;
`;

export default App;
