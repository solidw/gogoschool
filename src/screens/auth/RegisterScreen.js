import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import { AuthContext } from 'src/contexts/AuthContext';
import { UserContext } from 'src/contexts/UserContext';
import { SIGN_IN } from '../../contexts/reducers';

import { getSchoolList } from 'src/apis/school';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import StyledText from 'src/components/StyledText';
import UserInfoForm from 'src/components/UserInfoForm';

const RegisterScreen = ({ route }) => {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);

  const { isStudent, local, name, code } = route.params;
  const [registerData, setRegisterData] = useState({
    isStudent: isStudent,
    school: '송일초등학교',
    grade: '1',
    classNo: '1',
    number: '1',
    local: local,
    name: name,
    code: code,
  });
  const [schoolList, setSchoolList] = useState([]);
  useEffect(() => {
    console.log(local, name, code);
    const asyncGetSchoolList = async () => {
      const [status, data] = await getSchoolList();
      setSchoolList(data);
    };
    // asyncGetSchoolList();
  }, [code, local, name]);

  const onPressStart = () => {
    auth.dispatch({ type: SIGN_IN, token: isStudent ? 'student' : 'teacher' });
    user.setUser(registerData);
    AsyncStorage.setItem('userInfo', JSON.stringify(registerData));
    console.log(user.user);
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
          <StyledText>{local}</StyledText>
          <StyledText>{name}</StyledText>
          <StyledText>{code}</StyledText>
        </SimpleInfoView>
        <UserInfoForm value={registerData} setValue={setRegisterData} />
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
`;
const BodyView = styled.View`
  flex: 1;
  padding: 20px;
`;

export default RegisterScreen;
