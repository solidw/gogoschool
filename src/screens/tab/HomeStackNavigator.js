import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HakgyoScreen from 'src/screens/tab/HomeStack/HakgyoScreen';
import HomeScreen from 'src/screens/tab/HomeStack/HomeScreen';
import QRScreen from 'src/screens/tab/HomeStack/QRScreen';
import SelfCheckScreen from 'src/screens/tab/HomeStack/SelfCheckScreen';
import QuizScreen from 'src/screens/tab/HomeStack/QuizScreen';

import SafetyScreen from 'src/screens/tab/HomeStack/SafetyScreen';

import { UserContext } from 'src/contexts/UserContext';
import EmergencyScreen from 'src/screens/tab/HomeStack/EmergencyScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  const user = useContext(UserContext);
  const { isStudent } = user;

  return isStudent ? (
    <StudentStackNavigator user={user} />
  ) : (
    <TeacherStackNavigator user={user} />
  );
};

const StudentStackNavigator = ({ user }) => {
  return (
    <Stack.Navigator
      initialRouteName={'홈'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="홈"
        component={HomeScreen}
        initialParams={{ isStudent: true, user: user }}
      />
      <Stack.Screen
        name="QRCode"
        component={QRScreen}
        initialParams={{ isStudent: true, user: user }}
      />
      <Stack.Screen name="Hakgyo" component={HakgyoScreen} />
      <Stack.Screen name="SelfCheck" component={SelfCheckScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
    </Stack.Navigator>
  );
};

const TeacherStackNavigator = ({ user }) => {
  return (
    <Stack.Navigator
      initialRouteName={'홈'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="홈"
        component={HomeScreen}
        initialParams={{ isStudent: false, user: user }}
      />
      <Stack.Screen
        name="QRCode"
        component={QRScreen}
        initialParams={{ isStudent: false, user: user }}
      />
      <Stack.Screen name="Hakgyo" component={HakgyoScreen} />
      <Stack.Screen name="Emergency" component={EmergencyScreen} />
      <Stack.Screen name="Safety" component={SafetyScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
