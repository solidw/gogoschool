import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const NoticeContext = createContext();
const NoticeContextProvider = ({ children }) => {
  const [notice, setNotice] = useState([
    { id: 1, number: 1, name: '고태완' },
    { id: 2, number: 3, name: '엄주홍' },
  ]);

  useEffect(() => {
    AsyncStorage.setItem('notice', JSON.stringify(notice));
    AsyncStorage.getItem('notice').then(notices => console.log(notices));
  }, [notice]);
  return (
    <NoticeContext.Provider value={{ notice, setNotice }}>
      {children}
    </NoticeContext.Provider>
  );
};

export default NoticeContextProvider;
