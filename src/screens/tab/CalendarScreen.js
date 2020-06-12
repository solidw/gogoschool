import React from 'react';
import { View, Text, DatePickerAndroid } from 'react-native';
import styled from 'styled-components';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';
import { getFormatDate } from 'src/lib/Date.js';
import palette from 'src/lib/palette';

const CalendarScreen = () => {
  const now = new Date();
  const dates = [
    getFormatDate(now),
    '2020-06-01',
    '2020-06-03',
    '2020-06-05',
    '2020-06-09',
    '2020-06-11',
    '2020-06-15',
    '2020-06-17',
    '2020-06-19',
    '2020-06-23',
    '2020-06-25',
    '2020-06-29',
  ];
  const objForProps = {};
  dates.forEach(
    item =>
      (objForProps[item] = {
        startingDay: true,
        endingDay: true,
        color: 'green',
        textColor: 'white',
      }),
  );
  return (
    <CalendarScreenWrapper>
      <Calendar markedDates={objForProps} markingType={'period'} />
    </CalendarScreenWrapper>
  );
};

const CalendarScreenWrapper = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;
export default CalendarScreen;
