import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HakgyoScreen from 'src/screens/stack/HakgyoScreen';
import HomeScreen from 'src/screens/stack/HomeScreen';
import QRScreen from 'src/screens/stack/QRCode/QRScreen';
import AfterScan from 'src/screens/stack/QRCode/AfterScan';
import SelfCheckScreen from 'src/screens/stack/SelfCheckScreen';
import QuizScreen from 'src/screens/stack/QuizScreen';
import ChatbotScreen from 'src/screens/stack/ChatbotScreen';

import SafetyScreen from 'src/screens/stack/SafetyScreen';

import { UserContext } from 'src/contexts/UserContext';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  const { user } = useContext(UserContext);
  const { isStudent } = user;
  return isStudent ? (
    <StudentStackNavigator user={user} />
  ) : (
    <TeacherStackNavigator user={user} />
  );
};

const StudentStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ isStudent: true }}
      />
      <Stack.Screen
        name="QRCode"
        component={QRScreen}
        initialParams={{ isStudent: true }}
      />
      <Stack.Screen name="Hakgyo" component={HakgyoScreen} />
      <Stack.Screen name="Third" component={SelfCheckScreen} />
      <Stack.Screen name="Fourth" component={QuizScreen} />
      <Stack.Screen name="Chatbot" component={ChatbotScreen} />
    </Stack.Navigator>
  );
};

const TeacherStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ isStudent: false }}
      />
      <Stack.Screen
        name="QRCode"
        component={QRScreen}
        initialParams={{ isStudent: false }}
      />
      <Stack.Screen name="Hakgyo" component={HakgyoScreen} />
      <Stack.Screen name="Third" component={SelfCheckScreen} />
      <Stack.Screen name="Fourth" component={SafetyScreen} />
      <Stack.Screen name="AfterScan" component={AfterScan} />
      <Stack.Screen name="Chatbot" component={ChatbotScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
