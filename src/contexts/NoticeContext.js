import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const NoticeContext = createContext();
const NoticeContextProvider = ({ children }) => {
  const [notices, setNotices] = useState({
    isLoaded: false,
    noticeList: [
      { code: '111111', number: 1, name: '고태완' },
      { code: 'THNR28', number: 12, name: '강경준' },
      { code: '222222', number: 3, name: '엄주홍' },
    ],
  });

  useEffect(() => {
    console.log(`Changed: ${JSON.stringify(notices)}`);
  }, [notices]);

  const addNotice = noticeData => {
    const newNoticeList = [
      ...notices.noticeList,
      {
        code: noticeData.studentCode,
        name: noticeData.studentName,
        number: noticeData.studentNumber,
      },
    ];
    setNotices({
      isLoaded: notices.isLoaded,
      noticeList: newNoticeList,
    });
    AsyncStorage.setItem('notices', JSON.stringify(newNoticeList));
  };

  const removeNotice = noticeData => {
    const newNoticeList = notices.noticeList.filter(
      notice => noticeData.code !== notice.code,
    );
    setNotices({
      isLoaded: notices.isLoaded,
      noticeList: newNoticeList,
    });
    AsyncStorage.setItem('notices', JSON.stringify(newNoticeList));
  };

  return (
    <NoticeContext.Provider
      value={{ notices, setNotices, addNotice, removeNotice }}>
      {children}
    </NoticeContext.Provider>
  );
};

export default NoticeContextProvider;
