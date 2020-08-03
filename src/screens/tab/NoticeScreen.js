import React, { useState, useContext, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import StyledText from 'src/components/StyledText';
import palette from 'src/lib/palette';
import { putAcceptStudent } from 'src/apis/user';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';

import { NoticeContext } from 'src/contexts/NoticeContext';

const NoticeScreen = ({ route }) => {
  const { notices, removeNotice } = useContext(NoticeContext);
  const { user } = route.params;

  const renderNotice = useCallback(() => {
    const onClickAccept = notice => {
      console.log('@renderNotice/onClickAccept');
      putAcceptStudent({ teacherCode: user.code, studentCode: notice.code });
      removeNotice(notice);
    };

    const onClickDeny = notice => {
      console.log(`@renderNotice/onClickDeny: ${JSON.stringify(notice)}`);
      removeNotice(notice);
    };

    return (
      <NoticesView>
        {notices.noticeList.map((notice, index) => (
          <NoticeRow key={index}>
            <NoticeStyledText center size={15}>
              <StyledText color={palette.warningRed}>
                {notice.number}번{' '}
              </StyledText>
              <StyledText color={palette.hakgyoBlue}>{notice.name}</StyledText>
              {' 학생을 승인하시겠습니까?'}
            </NoticeStyledText>
            <FullRowTouchableOpacity
              onPress={() => onClickAccept(notice)}
              padding={20}
              background={palette.blackBoard}>
              <StyledText>승인</StyledText>
            </FullRowTouchableOpacity>
            <FullRowTouchableOpacity
              onPress={() => onClickDeny(notice)}
              padding={20}
              background={palette.lightGray}>
              <StyledText>거절</StyledText>
            </FullRowTouchableOpacity>
          </NoticeRow>
        ))}
      </NoticesView>
    );
  }, [notices, removeNotice, user.code]);

  return (
    <NoticeScreenWrapper>
      <HeaderView>
        <StyledText size={20}>알림</StyledText>
        <StyledText>
          {user.school} {user.grade}학년 {user.classNo}반
        </StyledText>
      </HeaderView>
      {renderNotice()}
    </NoticeScreenWrapper>
  );
};
const NoticeScreenWrapper = styled.ScrollView`
  flex: 1;
  background: ${palette.white};
`;

const HeaderView = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${palette.blackBoard};
`;

const NoticesView = styled.View`
  flex: 1;
`;
const NoticeRow = styled.View`
  padding: 15px;
  border-bottom-width: 2px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NoticeStyledText = styled(StyledText)`
  flex-basis: 50%;
`;
export default NoticeScreen;
