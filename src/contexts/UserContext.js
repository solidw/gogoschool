import React, { useState, createContext } from 'react';

const userDefaultValue = {
  isStudent: true,
};

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(userDefaultValue);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
