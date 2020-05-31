import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HakgyoScreen from 'src/screens/stack/HakgyoScreen';
import HomeScreen from 'src/screens/stack/HomeScreen';
import QRScreen from 'src/screens/stack/QRScreen';
import SelfCheckScreen from 'src/screens/stack/SelfCheckScreen';
import QuizScreen from 'src/screens/stack/QuizScreen';

import SafetyScreen from 'src/screens/stack/SafetyScreen';

import { UserContext } from 'src/contexts/UserContext';
import EmergencyScreen from 'src/screens/stack/EmergencyScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  const { user } = useContext(UserContext);
  const { isStudent } = user;
  console.log(user);
  return isStudent ? (
    <StudentStackNavigator user={user} />
  ) : (
    <TeacherStackNavigator user={user} />
  );
};

const StudentStackNavigator = ({ user }) => {
  console.log('student stack');
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
      <Stack.Screen name="Third" component={SelfCheckScreen} />
      <Stack.Screen name="Fourth" component={QuizScreen} />
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
      <Stack.Screen name="Third" component={EmergencyScreen} />
      <Stack.Screen name="Fourth" component={SafetyScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
