import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import UserContextProvider from 'src/contexts/UserContext';
import AuthContextProvider from 'src/contexts/AuthContext';
import NoticeContextProvider from 'src/contexts/NoticeContext';
import MissionContextProvider from 'src/contexts/MissionContext';
import AppWrapper from 'src/AppWrapper';

const App = () => {
  useEffect(() => {
    const subscribe = messaging().setBackgroundMessageHandler(
      async remoteMessage => {
        console.log(
          'Background: Message handled in the background!',
          remoteMessage,
        );
      },
    );
    return subscribe;
  }, []);

  return (
    <AuthContextProvider>
      <UserContextProvider>
        <NoticeContextProvider>
          <MissionContextProvider>
            <AppWrapper />
          </MissionContextProvider>
        </NoticeContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
};

export default App;
