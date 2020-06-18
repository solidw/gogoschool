import React, { createContext, useReducer } from 'react';
import { authReducer } from './reducers';

const authDefaultValue = {
  isLoading: true,
  isLoggedIn: false,
  userToken: null,
};

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, authDefaultValue);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
