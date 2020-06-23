import React, { useState, useEffect, useContext } from 'react';
import { Text, Alert } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import { UserContext } from 'src/contexts/UserContext';
import { getUserInfoByCode, postStudentTemperature } from 'src/apis/user';
import UserInfoFromAPI from 'src/components/UserInfoFromAPI';
import ErrorScreen from 'src/screens/stack/QRCode/ErrorScreen';
import AbsoluteIndicator from 'src/components/AbsoluteIndicator';

const ParsefixedTemperature = value => {
  return parseFloat(parseFloat(value).toFixed(1));
};

const AfterScan = ({ route, navigation }) => {
  const { userCode } = route.params;
  const { user } = useContext(UserContext);
  const [isFailed, setFailed] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const [temperature, setTemperature] = useState(36.5);
  const [studentInfo, setStudentInfo] = useState({
    school: '',
    grade: '',
    classNo: '',
    number: '',
    name: '',
  });

  useEffect(() => {
    const asyncGetUserInfoByCode = async () => {
      const [status, _data] = await getUserInfoByCode(userCode);
      if (status === 200) {
        setStudentInfo(_data);
        setLoading(false);
      } else {
        setFailed(true);
      }
    };
    asyncGetUserInfoByCode();
  }, [isLoading, userCode]);

  const onSubmitTemperature = async () => {
    const status = await postStudentTemperature({
      code: user.code,
      studentCode: userCode,
      temperature: temperature,
    });
    console.log(`@onSubmitTemperature: ${status}`);
  };

  const onTriggerAlert = () => {
    Alert.alert(
      '체온 기록 확인',
      `${studentInfo.name} 학생의 체온이 ${temperature}도가 맞습니까?`,
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: '제출',
          onPress: () => {
            onSubmitTemperature();
            navigation.push('Home');
          },
        },
      ],
      { cancelable: false },
    );
  };

  return isFailed ? (
    <ErrorScreen navigation={navigation} />
  ) : (
    <AfterScanWrapper>
      {isLoading ? (
        <AbsoluteIndicator />
      ) : (
        <>
          <TopView>
            <StyledText center size={30}>
              학생 정보 {isLoading && '를 불러오는 중입니다.'}
            </StyledText>
          </TopView>
          <UserInfoFromAPI userInfo={studentInfo} />
          <TemperatureViewWrapper>
            <StyledText center size={35}>
              체온 기록하기
            </StyledText>
          </TemperatureViewWrapper>
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
            onPress={onTriggerAlert}
            background={palette.blackBoard}>
            <StyledText size={30}>제출</StyledText>
          </FullRowTouchableOpacity>
          <Text>{userCode}</Text>
        </>
      )}
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

const TemperatureViewWrapper = styled.View`
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

export default AfterScan;
