import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { getMaxDate } from 'src/lib/Date.js';
import palette from 'src/lib/palette';
import { localeKR } from '../../lib/calendarLocale';

import StyledText from 'src/components/StyledText';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import AsyncStorage from '@react-native-community/async-storage';

LocaleConfig.locales.kr = localeKR;
LocaleConfig.defaultLocale = 'kr';

const now = new Date();

const generateFullDate = () => {
  const maxDate = getMaxDate(now.getMonth() + 1);
  const templateDate =
    now.getFullYear() + '-' + (now.getMonth() + 1 + '').padStart(2, '0') + '-';
  let arrays = [];
  for (let i = 1; i <= maxDate; i++) {
    arrays.push(templateDate + (i + '').padStart(2, '0'));
  }

  return arrays;
};
const fullDate = generateFullDate();

const CalendarScreen = () => {
  const [dates, setDates] = useState([]);
  const [datesObj, setDatesObj] = useState({});

  const onClickOdd = () => {
    const filtered = fullDate.filter(
      date => (date[date.length - 1] * 1) % 2 === 1,
    );
    setDates(filtered);
  };

  const onClickEven = () => {
    const filtered = fullDate.filter(
      date => (date[date.length - 1] * 1) % 2 === 0,
    );
    setDates(filtered);
  };

  useEffect(() => {
    AsyncStorage.getItem('calendarDate').then(calendarDate => {
      setDates(JSON.parse(calendarDate));
    });
  }, []);

  useEffect(() => {
    setDatesObj(
      dates.reduce((acc, cur) => {
        return {
          ...acc,
          [cur]: {
            startingDay: true,
            endingDay: true,
            color: 'green',
            textColor: 'white',
          },
        };
      }, {}),
    );
    AsyncStorage.setItem('calendarDate', JSON.stringify(dates));
  }, [dates]);
  return (
    <CalendarScreenWrapper>
      <Calendar
        theme={{
          textDayFontFamily: 'baskin-robbins-R',
          textMonthFontFamily: 'baskin-robbins-R',
          textDayFontSize: 18,
          textMonthFontSize: 20,
        }}
        monthFormat={'yyyy년 MM월'}
        markedDates={datesObj}
        markingType={'period'}
        onDayPress={day => {
          if (dates.indexOf(day.dateString) === -1) {
            setDates([...dates, day.dateString]);
          } else {
            setDates(
              dates.filter(
                (_, index) => dates.indexOf(day.dateString) !== index,
              ),
            );
          }
        }}
      />
      <ButtonView>
        <FullRowTouchableOpacity
          background={palette.green}
          onPress={() => onClickOdd()}>
          <StyledText>홀수 등교 (1, 3, 5, 7, 9)</StyledText>
        </FullRowTouchableOpacity>
        <FullRowTouchableOpacity
          background={palette.hakgyoYellow}
          onPress={() => onClickEven()}>
          <StyledText>짝수 등교 (0, 2, 4, 6, 8)</StyledText>
        </FullRowTouchableOpacity>
        <FullRowTouchableOpacity
          background={palette.pastelRed}
          onPress={() => setDates([])}>
          <StyledText>초기화</StyledText>
        </FullRowTouchableOpacity>
      </ButtonView>
    </CalendarScreenWrapper>
  );
};

const CalendarScreenWrapper = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;

const ButtonView = styled.View`
  padding-vertical: 20px;
  justify-content: center;
  align-items: center;
`;
export default CalendarScreen;
