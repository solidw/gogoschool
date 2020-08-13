import React from 'react';
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

export default CalendarScreen;
