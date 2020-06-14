import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';

const FormData = ({ isLogin, setValue, value }) => {
  return (
    <FormDataWrapper>
      {isLogin ? (
        <LoginForm setValue={setValue} value={value} />
      ) : (
        <RegisterForm setValue={setValue} value={value} />
      )}
    </FormDataWrapper>
  );
};

const LoginForm = ({ setValue, value }) => {
  return (
    <FormView>
      <RowView>
        <RowText size={20} way="left">
          인증번호
        </RowText>
        <RowTextInput
          way="right"
          value={value}
          onChangeText={text => setValue(text)}
        />
      </RowView>
    </FormView>
  );
};

const RegisterForm = ({ setValue, value }) => {
  const [isStudent, setStudent] = useState('');
  const [local, setLocal] = useState('');
  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');
  const [classNo, setClassNo] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  return (
    <FormView>
      <RowView>
        <RowText size={20} way="left">
          지역
        </RowText>
        <RowTextInput
          way="right"
          value={local}
          onChangeText={text => setLocal(text)}
        />
      </RowView>
      <RowView>
        <RowText size={20} way="left">
          우리 학교
        </RowText>
        <RowTextInput
          way="right"
          value={school}
          onChangeText={text => setSchool(text)}
        />
      </RowView>

      <RowView>
        <RowText size={20} way="left">
          학년
        </RowText>
        <RowTextInput
          way="right"
          value={grade}
          onChangeText={text => setGrade(text)}
        />
      </RowView>
      <RowView>
        <RowText size={20} way="left">
          반
        </RowText>
        <RowTextInput
          way="right"
          value={classNo}
          onChangeText={text => setClassNo(text)}
        />
      </RowView>
      <RowView>
        <RowText size={20} way="left">
          번호
        </RowText>
        <RowTextInput
          way="right"
          value={number}
          onChangeText={text => setNumber(text)}
        />
      </RowView>
      <RowView>
        <RowText size={20} way="left">
          이름
        </RowText>
        <RowTextInput
          way="right"
          value={name}
          onChangeText={text => setName(text)}
        />
      </RowView>
      <RowView>
        <RowText size={20} way="left">
          고유코드
        </RowText>
        <RowTextInput
          way="right"
          value={code}
          onChangeText={text => setCode(text)}
        />
      </RowView>
    </FormView>
  );
};

const FormDataWrapper = styled.ScrollView`
  margin-top: 20px;
  margin-horizontal: 20px;
  flex: 1;
`;

const FormView = styled.View`
  margin-vertical: 20px;
  flex-direction: column;
`;

const RowView = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding-vertical: 2px;
  border-bottom-width: 3px;
  border-bottom-color: gray;
`;

const RowText = styled(StyledText)`
  flex-basis: ${props => (props.way === 'left' ? '30%' : '50%')};
  text-align: ${props => (props.way === 'left' ? 'right' : 'center')};
  ${({ size }) => size && `font-size: ${size}px`}
`;

const RowTextInput = styled.TextInput`
  flex-basis: ${props => (props.way === 'left' ? '30%' : '50%')};
  text-align: ${props => (props.way === 'left' ? 'right' : 'center')};
  font-size: 20px;
  margin-vertical: 5px;
`;

export default FormData;
