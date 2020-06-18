import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

import axios from 'axios';

import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';
import Locals from 'src/components/Locals';

import StyledText from 'src/components/StyledText';
import StyledTextInput from 'src/components/StyledTextInput';

import { hcheckMatchURL } from 'src/lib/offices';

const LoginScreen = ({ navigation }) => {
  const [data, setData] = useState({
    isStudent: '',
    local: '대구',
    name: '강경준',
    code: 'THNR28',
  });
  const hcheckURL = `${hcheckMatchURL[data.local]}/stv_cvd_co00_011.do?pName=${
    data.name
  }&qstnCrtfcNo=${data.code}`;

  useEffect(() => {});
  return (
    <LoginScreenWrapper>
      <HeaderView>
        <StyledText size={30}>시작하기</StyledText>
      </HeaderView>
      <BodyView>
        <StyledText margin={10} size={20}>
          지역을 선택해주세요.
        </StyledText>
        <Locals
          local={data.local}
          setLocal={d => setData({ ...data, local: d })}
        />
        <RowView>
          <RowText size={20}>이름</RowText>
          <RowTextInput
            placeholder={'이름'}
            value={data.name}
            onChangeText={text => setData({ ...data, name: text })}
          />
        </RowView>
        <RowView>
          <RowText size={20}>인증번호</RowText>
          <RowTextInput
            placeholder={'인증번호'}
            value={data.code}
            onChangeText={text => {
              const capitalText = text.toUpperCase();
              setData({ ...data, code: capitalText });
            }}
          />
        </RowView>
      </BodyView>
      <FullRowTouchableOpacity
        onPress={() => {
          axios
            .post(hcheckURL)
            .then(res => {
              const resultCode = res.data.resultSVO.rtnRsltCode;
              console.log(resultCode);
              if (resultCode === 'QSTN_USR_ERROR') {
                Alert.alert(
                  '인증 실패',
                  `지역, ${'이름'} 혹은 ${'인증번호'}가 올바르지 않거나 서버와 연결할 수 없습니다.`,
                  [{ text: '확인', onPress: () => console.log('OK Pressed') }],
                  { cancelable: false },
                );
                return;
              }

              if (resultCode === 'TCHER_SUCCESS') {
                navigation.push('Register', {
                  isStudent: false,
                  local: data.local,
                  name: data.name,
                  code: data.code,
                });
              } else if (resultCode === 'SUCCESS') {
                navigation.push('Register', {
                  isStudent: true,
                  local: data.local,
                  name: data.name,
                  code: data.code,
                });
              }
            })
            .catch(e => {
              Alert.alert(
                '네트워크 에러',
                `지역, ${'이름'} 혹은 ${'인증번호'}가 올바르지 않거나 서버와 연결할 수 없습니다.`,
                [{ text: '확인', onPress: () => console.log('OK Pressed') }],
                { cancelable: false },
              );
              console.log(e);
            });
        }}
        background={palette.hakgyoYellow}>
        <StyledText size={20}>시작하기</StyledText>
      </FullRowTouchableOpacity>
    </LoginScreenWrapper>
  );
};
const LoginScreenWrapper = styled.ScrollView`
  flex: 1;
  background-color: ${palette.white};
`;

const HeaderView = styled.View`
  padding: 20px;
  background-color: ${palette.hakgyoYellow};
  border-bottom-width: 3px;
`;

const BodyView = styled.View`
  flex: 1;
  padding: 30px;
  margin: 0 auto;
`;

const RowView = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  margin-vertical: 10px;
  padding-vertical: 10px;
  border-bottom-width: 3px;
  border-bottom-color: gray;
`;

const RowText = styled(StyledText)`
  flex: 1;
  ${({ way }) => (way ? `text-align: ${way}` : 'text-align: right')};
  ${({ size }) => size && `font-size: ${size}px`}
`;

const RowTextInput = styled(StyledTextInput)`
  flex: 2;
  text-align: ${({ way }) => (way === 'left' ? 'right' : 'center')};
  font-size: 15px;
`;

export default LoginScreen;
