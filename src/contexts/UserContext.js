import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '고태완',
    login: false,
    isStudent: true,
  });

  const loginUser = () => {
    setUser({ ...user, name: '고태완_로그인', login: true });
  };

  return (
    <UserContext.Provider value={{ ...user }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
