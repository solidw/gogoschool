// 임시 db
import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const userExample = {
    studentExample: {
      name: '고태완',
      isStudent: true,
      region: '대전',
      code: 'AAABBB',
    },
    teacherExample: {
      name: '신민철',
      isStudent: false,
      region: '대구',
      code: 'CCCDDD',
    },
  };

  const [user, setUser] = useState(userExample.studentExample);

  const toggleUser = () => {
    setUser(
      user.isStudent ? userExample.teacherExample : userExample.studentExample,
    );
    console.log(user);
  };

  const loginWith = something => {
    if (something === 'student') {
      setUser(userExample.studentExample);
    } else if (something === 'teacher') {
      setUser(userExample.teacherExample);
    }
  };

  return (
    <UserContext.Provider value={{ user, toggleUser, loginWith }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
