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

const CalendarScreen = () => {
  const now = new Date();
  const dates = [getFormatDate(now), '2020-05-29', '2020-06-01'];
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
  return <Calendar markedDates={objForProps} markingType={'period'} />;
};

export default CalendarScreen;
