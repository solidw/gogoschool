import React, { useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';

import { AuthContext } from 'src/contexts/AuthContext';
import { UserContext } from 'src/contexts/UserContext';
import { NoticeContext } from 'src/contexts/NoticeContext';

import MainTabNavigator from 'src/navigators/MainTabNavigator';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import LoadingView from 'src/components/LoadingView';
import { RESTORE_TOKEN } from 'src/contexts/reducers';

const AppWrapper = () => {
  const { authState, dispatch } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);
  const { notices, addNotice } = useContext(NoticeContext);

  useEffect(() => {
    const asyncGetUserInfo = () => {
      AsyncStorage.getItem('userInfo')
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
    if (user.isStudent === false) {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log(
          `@AppWrapper remoteMessage: ${JSON.stringify(remoteMessage)}`,
        );
        if (remoteMessage.notification.body && remoteMessage.data) {
          addNotice(remoteMessage.data);
          Alert.alert('학생 등록 감지', remoteMessage.notification.body);
        }
      });
      return unsubscribe;
    }
  }, [addNotice, user.isStudent]);

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
