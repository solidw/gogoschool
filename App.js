import 'react-native-gesture-handler';
import React, { useContext } from 'react';

import UserContextProvider, { UserContext } from 'src/contexts/UserContext';
import AppWrapper from 'src/AppWrapper';
import AuthContextProvider from 'src/contexts/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <AppWrapper />
      </UserContextProvider>
    </AuthContextProvider>
  );
};

export default App;
