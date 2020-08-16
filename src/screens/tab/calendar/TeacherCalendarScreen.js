import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import palette from 'src/lib/palette';
import { localeKR } from 'src/lib/calendarLocale';
import StyledText from 'src/components/StyledText';
import { getDailyTemperature } from 'src/apis/user.js';
import { getFormatDate } from 'src/lib/Date';

LocaleConfig.locales.kr = localeKR;
LocaleConfig.defaultLocale = 'kr';

const CalendarScreen = ({ user, navigation }) => {
  const teacherCode = user.code;
  const todayString = getFormatDate(new Date());
  const [selected, setSelected] = useState(todayString);
  const [isFailed, setFailed] = useState(true);

  const [temperatureData, setTemperatureData] = useState();

  const asyncGetStudentTemperatureData = useCallback(async () => {
    const [status, data] = await getDailyTemperature({
      teacherCode: teacherCode,
      date: selected,
    });
    if (status === 200) {
      setTemperatureData(data);
      setFailed(false);
    } else {
      setFailed(true);
    }
  }, [selected, teacherCode]);

  useEffect(() => {
    asyncGetStudentTemperatureData();
  }, [asyncGetStudentTemperatureData]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      asyncGetStudentTemperatureData();
    });
    return unsubscribe;
  }, [asyncGetStudentTemperatureData, navigation]);

  const renderTemperatureList = () => (
    <TemperatureList>
      {temperatureData.map(obj =>
        obj.TemperatureData.map((data, index) => (
          <TemperatureListItem key={index}>
            <TemperatureText>{index === 0 ? obj.number : ''}</TemperatureText>
            <TemperatureText>{index === 0 ? obj.name : ''}</TemperatureText>
            <TemperatureText>
              {data.time.split(':')[0] + '시 ' + data.time.split(':')[1] + '분'}
            </TemperatureText>
            <TemperatureText>{data.temperature}도</TemperatureText>
          </TemperatureListItem>
        )),
      )}
    </TemperatureList>
  );

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
        }}
      />
      {isFailed ? (
        <StyledText center margin={10} size={15}>
          체온 기록 정보를 불러오는데에 실패했습니다.
        </StyledText>
      ) : temperatureData.length === 0 ? (
        <StyledText center margin={10} size={15}>
          {selected} 에 기록된 정보가 없습니다.
        </StyledText>
      ) : (
        renderTemperatureList()
      )}
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
