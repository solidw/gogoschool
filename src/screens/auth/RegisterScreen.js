import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ListView, Alert } from 'react-native';
import styled from 'styled-components';

import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';

import palette from 'src/lib/palette';
import { AuthContext } from 'src/contexts/AuthContext';
import { UserContext } from 'src/contexts/UserContext';
import { SIGN_IN } from '../../contexts/reducers';

import { getSchoolList } from 'src/apis/school';
import { postRegisterData } from 'src/apis/user';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import StyledText from 'src/components/StyledText';
import UserInfoForm from 'src/components/UserInfoForm';

const RegisterScreen = ({ route }) => {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
  const { isStudent, local, name, code, directLink } = route.params;
  const [registerData, setRegisterData] = useState({
    isStudent: isStudent,
    school: '송일초등학교',
    schoolCode: 0,
    grade: '3',
    classNo: '2',
    number: '15',
    local: local,
    name: name,
    code: code,
    directLink: directLink,
    token: '',
  });

  const [schoolList, setSchoolList] = useState([]);
  useEffect(() => {
    const asyncGetSchoolList = async () => {
      const [status, data] = await getSchoolList(local);
      setSchoolList(data);
    };
    asyncGetSchoolList();
  }, [local]);

  const getSchoolCode = async school => {
    const correctSchoolData = schoolList.filter(
      schoolObj => schoolObj.schoolName === school,
    );
    if (correctSchoolData.length === 0) {
      return 0;
    } else {
      const schoolId = correctSchoolData[0].id;
      console.log(schoolId);
      return schoolId;
    }
  };

  const onPressStart = async () => {
    const token = await messaging().getToken();
    const schoolId = await getSchoolCode(registerData.school);
    if (schoolId === 0) {
      Alert.alert(
        '학교명 확인',
        '학교명을 다시 확인해주세요. "우리 학교 자동완성"을 누르거나 새로 입력해주세요.',
        [
          {
            text: '확인',
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
      return false;
    } else {
      await postRegisterData({
        ...registerData,
        schoolCode: schoolId,
        token: token,
      });
      auth.dispatch({
        type: SIGN_IN,
        token: isStudent ? 'student' : 'teacher',
      });

      user.setUser(registerData);
      AsyncStorage.setItem('userInfo', JSON.stringify(registerData));
    }
  };

  return (
    <RegisterScreenWrapper>
      <HeaderView isStudent={isStudent}>
        <StyledText size={30}>{`정보입력_${
          isStudent ? '학생' : '교사'
        }`}</StyledText>
      </HeaderView>
      <BodyView>
        <SimpleInfoView>
          <StyledText size={20}>{local}</StyledText>
          <StyledText size={20}>{name}</StyledText>
          <StyledText size={20}>{code}</StyledText>
        </SimpleInfoView>
        <UserInfoForm
          isStudent={isStudent}
          value={registerData}
          setValue={setRegisterData}
          schoolList={schoolList}
        />
      </BodyView>
      <FullRowTouchableOpacity
        onPress={() => onPressStart()}
        background={isStudent ? palette.hakgyoYellow : palette.blackBoard}>
        <StyledText size={20}>시작하기</StyledText>
      </FullRowTouchableOpacity>
    </RegisterScreenWrapper>
  );
};
const RegisterScreenWrapper = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;

const HeaderView = styled.View`
  padding: 20px;
  background-color: ${({ isStudent }) =>
    isStudent ? palette.hakgyoYellow : palette.blackBoard};
`;

const SimpleInfoView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-vertical: 10px;
`;
const BodyView = styled.View`
  flex: 1;
  padding: 20px;
`;

export default RegisterScreen;
