import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import palette from 'src/lib/palette';
import { localeKR } from 'src/lib/calendarLocale';

import StyledText from 'src/components/StyledText';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';

LocaleConfig.locales.kr = localeKR;
LocaleConfig.defaultLocale = 'kr';

const dummyTemperatureList = [
  {
    number: 1,
    name: '고태완',
    temperatureData: [
      { time: '09:00', temperature: 36.5 },
      { time: '12:00', temperature: 36.3 },
      { time: '16:00', temperature: 36.7 },
    ],
  },
  {
    number: 2,
    name: '강경준',
    temperatureData: [
      { time: '09:02', temperature: 36.1 },
      { time: '12:05', temperature: 36.2 },
      { time: '16:03', temperature: 36.3 },
    ],
  },
  {
    number: 3,
    name: '엄주홍',
    temperatureData: [
      { time: '09:04', temperature: 36.4 },
      { time: '12:10', temperature: 36.7 },
      { time: '16:12', temperature: 36.4 },
    ],
  },
  {
    number: 4,
    name: '신민철',
    temperatureData: [
      { time: '09:13', temperature: 36.1 },
      { time: '12:20', temperature: 36.2 },
      { time: '16:32', temperature: 36.4 },
    ],
  },
];

const CalendarScreen = () => {
  const [selected, setSelected] = useState();

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
        markedDates={{
          [selected]: {
            startingDay: true,
            endingDay: true,
            color: 'green',
            textColor: 'white',
            selected: true,
            selectedColor: 'green',
          },
        }}
        onDayPress={day => {
          setSelected(day.dateString);
          console.log(day.dateString);
        }}
      />
      <TemperatureList>
        {dummyTemperatureList.map(obj =>
          obj.temperatureData.map((data, index) => (
            <TemperatureListItem key={index}>
              <TemperatureText>{index === 0 ? obj.number : ''}</TemperatureText>
              <TemperatureText>{index === 0 ? obj.name : ''}</TemperatureText>
              <TemperatureText>
                {data.time.split(':')[0] +
                  '시 ' +
                  data.time.split(':')[1] +
                  '분'}
              </TemperatureText>
              <TemperatureText>{data.temperature}도</TemperatureText>
            </TemperatureListItem>
          )),
        )}
      </TemperatureList>
    </CalendarScreenWrapper>
  );
};

const CalendarScreenWrapper = styled.ScrollView`
  flex-grow: 1;
  background-color: ${palette.white};
`;

const TemperatureList = styled.View`
  padding-vertical: 10px;
  justify-content: center;
`;

const TemperatureListItem = styled.View`
  padding-vertical: 5px;
  margin-horizontal: 10px;
  flex-direction: row;
  justify-content: space-around;
  border-bottom-width: 2px;
  border-bottom-color: gray;
`;

const TemperatureText = styled(StyledText)`
  flex-basis: 25%;
  text-align: center;
`;
export default CalendarScreen;
