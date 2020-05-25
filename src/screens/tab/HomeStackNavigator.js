import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HakgyoScreen from 'src/screens/tab/HomeStack/HakgyoScreen';
import HomeScreen from 'src/screens/tab/HomeStack/HomeScreen';
import QRScreen from 'src/screens/tab/HomeStack/QRScreen';
import SelfCheckScreen from 'src/screens/tab/HomeStack/SelfCheckScreen';
import SafetyScreen from 'src/screens/tab/HomeStack/SafetyScreen';

import { UserContext } from 'src/contexts/UserContext';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <Stack.Navigator
      initialRouteName={'홈'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="홈"
        component={HomeScreen}
        initialParams={{ isStudent: true, user: user }}
      />
      <Stack.Screen name="QRCode" component={QRScreen} />
      <Stack.Screen name="Hakgyo" component={HakgyoScreen} />
      <Stack.Screen name="SelfCheck" component={SelfCheckScreen} />
      <Stack.Screen name="Safety" component={SafetyScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
