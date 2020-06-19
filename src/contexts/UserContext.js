import React, { useState, createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const userDefaultValue = {
  isStudent: true,
};

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const userExample = {
    studentExample: {
      isStudent: true,
      local: '대구',
      school: '송일초등학교',
      grade: '3',
      classNo: '2',
      number: '17',
      name: '강경준',
      code: 'THNR28',
    },
    teacherExample: {
      isStudent: false,
      local: '대구',
      school: '강림초등학교',
      grade: '3',
      classNo: '2',
      number: '17',
      name: '신민철',
      code: 'ANGX8U',
    },
  };

  const [user, setUser] = useState(userDefaultValue);

  const toggleUser = () => {
    AsyncStorage.setItem(
      'userInfo',
      JSON.stringify(
        user.isStudent
          ? userExample.teacherExample
          : userExample.studentExample,
      ),
    );
    setUser(
      user.isStudent ? userExample.teacherExample : userExample.studentExample,
    );
  };

  const loginWith = something => {
    console.log(`loginWith: ${something}`);
    if (something === 'student') {
      setUser(userExample.studentExample);
      AsyncStorage.setItem(
        'userInfo',
        JSON.stringify(userExample.studentExample),
      );
    } else if (something === 'teacher') {
      setUser(userExample.teacherExample);
      AsyncStorage.setItem(
        'userInfo',
        JSON.stringify(userExample.teacherExample),
      );
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, toggleUser, loginWith }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
