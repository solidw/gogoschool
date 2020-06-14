import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';

const ParsefixedTemperature = value => {
  return parseFloat(parseFloat(value).toFixed(1));
};

const AfterScan = ({ route, navigation }) => {
  const { userCode } = route.params;
  const [temperature, setTemperature] = useState(36.5);
  const onSubmitTemperature = () => {
    Alert.alert(
      '체온 기록 확인',
      `${'고태완'} 학생의 체온이 ${temperature}도가 맞습니까?`,
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: '제출', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  };
  return (
    <AfterScanWrapper>
      <TopView>
        <CenteredText>학생 정보</CenteredText>
      </TopView>
      <StudentInfoView>
        <CenteredText size={30}>{`${'송일초등학교'}`}</CenteredText>
        <CenteredText size={30}>{`${'3'}학년 ${'1'}반 ${'2'}번`}</CenteredText>
        <CenteredText size={30}>{`${'고태완'}`}</CenteredText>
      </StudentInfoView>
      <CenteredText size={40}>체온 기록</CenteredText>
      <TemperatureView>
        <FullRowTouchableOpacity
          onPress={() =>
            setTemperature(ParsefixedTemperature(temperature - 0.1))
          }
          background={palette.pastelBlue}>
          <StyledText size={20}>-0.1</StyledText>
        </FullRowTouchableOpacity>
        <StyledText size={40}>{`${temperature} 도`}</StyledText>
        <FullRowTouchableOpacity
          onPress={() =>
            setTemperature(ParsefixedTemperature(temperature + 0.1))
          }
          background={palette.pastelRed}>
          <StyledText size={20}>+0.1</StyledText>
        </FullRowTouchableOpacity>
      </TemperatureView>
      <FullRowTouchableOpacity
        onPress={onSubmitTemperature}
        background={palette.blackBoard}>
        <StyledText size={30}>제출</StyledText>
      </FullRowTouchableOpacity>
      <Text>{userCode}</Text>
    </AfterScanWrapper>
  );
};
const AfterScanWrapper = styled.View`
  flex: 1;
  background-color: white;
`;

const TopView = styled.View`
  height: 10%;
  background-color: ${palette.blackBoard};
  justify-content: center;
`;

const StudentInfoView = styled.View`
  flex: 1;
  justify-content: center;
  padding-vertical: 10px;
`;

const TemperatureView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 15px;
`;

const CenteredText = styled(StyledText)`
  text-align: center;
`;

export default AfterScan;
