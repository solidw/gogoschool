import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';

import { AuthContext } from 'src/contexts/AuthContext';
import { UserContext } from 'src/contexts/UserContext';

import MainTabNavigator from 'src/navigators/MainTabNavigator';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import LoadingView from 'src/components/LoadingView';
import { RESTORE_TOKEN } from 'src/contexts/reducers';
import { Alert } from 'react-native';

const AppWrapper = () => {
  const { authState, dispatch } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const asyncGetUserInfo = async () => {
      await AsyncStorage.getItem('userInfo')
        .then(value => {
          if (value !== null) {
            setUser(JSON.parse(value));
            dispatch({ type: RESTORE_TOKEN, isLoggedIn: true, token: '' });
          } else {
            dispatch({ type: RESTORE_TOKEN, isLoggedIn: false, token: '' });
          }
        })
        .catch(e => console.log(e));
    };
    asyncGetUserInfo();
  }, [dispatch, setUser]);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'Foreground: A new FCM message arrived!',
        remoteMessage.notification.body,
      );
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().setBackgroundMessageHandler(
      async remoteMessage => {
        console.log(
          'Background: Message handled in the background!',
          remoteMessage,
        );
      },
    );

    return unsubscribe;
  }, []);

  if (authState.isLoading) {
    return <LoadingView />;
  }

  return (
    <SafeAreaViewWrapper>
      {authState.isLoggedIn ? <MainTabNavigator /> : <AuthStackNavigator />}
    </SafeAreaViewWrapper>
  );
};

const SafeAreaViewWrapper = styled.SafeAreaView`
  flex: 1;
`;

export default AppWrapper;
