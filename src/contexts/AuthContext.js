// 임시
import React, { useState, createContext, useReducer } from 'react';
import { authReducer, SIGN_IN, SIGN_OUT, RESTORE_TOKEN } from './reducers';

export const AuthContext = createContext();

const authExample = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, authExample);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
