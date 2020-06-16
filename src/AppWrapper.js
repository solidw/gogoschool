import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

import { AuthContext } from 'src/contexts/AuthContext';
import { UserContext } from 'src/contexts/UserContext';

import MainTabNavigator from 'src/navigators/MainTabNavigator';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import LoadingView from 'src/components/LoadingView';
import { RESTORE_TOKEN } from 'src/contexts/reducers';

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
