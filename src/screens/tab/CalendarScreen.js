import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StudentCalendarScreen from 'src/screens/tab/calendar/StudentCalendarScreen';
import TeacherCalendarScreen from 'src/screens/tab/calendar/TeacherCalendarScreen';
const CalendarScreen = ({ route, navigation }) => {
  const { user } = route.params;
  return user.isStudent ? (
    <StudentCalendarScreen />
  ) : (
    <TeacherCalendarScreen user={user} navigation={navigation} />
  );
};

const CalendarScreenWrapper = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;

export default CalendarScreen;
