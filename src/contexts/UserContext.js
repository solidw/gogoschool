import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '고태완',
    isStudent: true,
  });

  const toggleUser = () => {
    setUser({ ...user, isStudent: !user.isStudent });
    console.log(user.isStudent);
  };

  return (
    <UserContext.Provider value={{ ...user, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
