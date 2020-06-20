import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

import StyledText from 'src/components/StyledText';
import StyledTextInput from 'src/components/StyledTextInput';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';

const UserInfoForm = ({ isStudent, value, setValue, schoolList = [] }) => {
  const [filteredSchool, setFilteredSchool] = useState('');

  useEffect(() => {
    const filtered = schoolList.filter(data =>
      data.schoolName.includes(value.school),
    );
    if (filtered.length !== 0) {
      setFilteredSchool(filtered[0].schoolName);
    }
  }, [schoolList, value.school]);

  return (
    <UserInfoFormWrapper>
      <RowView>
        <RowText size={20} way="left">
          우리 학교
        </RowText>
        <RowTextInput
          placeholder="학교명"
          way="right"
          value={value.school}
          onChangeText={text => setValue({ ...value, school: text })}
        />
      </RowView>
      <RowView>
        <FullRowTouchableOpacity
          onPress={() => {
            setValue({ ...value, school: filteredSchool });
          }}
          background={palette.lightGray}
          disabled={schoolList.length === 0}>
          <StyledText>우리 학교 자동완성</StyledText>
        </FullRowTouchableOpacity>
        <StyledText>{filteredSchool}</StyledText>
      </RowView>
      <RowView>
        <RowText size={20} way="left">
          학년
        </RowText>
        <RowTextInput
          placeholder="학년"
          way="right"
          value={value.grade}
          onChangeText={text => setValue({ ...value, grade: text })}
        />
      </RowView>
      <RowView>
        <RowText size={20} way="left">
          반
        </RowText>
        <RowTextInput
          placeholder="반"
          way="right"
          value={value.classNo}
          onChangeText={text => setValue({ ...value, classNo: text })}
        />
      </RowView>
      {isStudent ? (
        <RowView>
          <RowText size={20} way="left">
            번호
          </RowText>
          <RowTextInput
            placeholder="학급 번호"
            way="right"
            value={value.number}
            onChangeText={text => setValue({ ...value, number: text })}
          />
        </RowView>
      ) : null}
    </UserInfoFormWrapper>
  );
};
const UserInfoFormWrapper = styled.View``;

const RowView = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding-vertical: 2px;
  border-bottom-width: 3px;
  border-bottom-color: gray;
`;

const RowText = styled(StyledText)`
  flex-basis: ${({ way }) => (way === 'left' ? '30%' : '50%')};
  text-align: ${({ way }) => (way === 'left' ? 'right' : 'center')};
  ${({ size }) => size && `font-size: ${size}px`}
`;

const RowTextInput = styled(StyledTextInput)`
  flex: 1;
  flex-basis: ${({ way }) => (way === 'left' ? '30%' : '50%')};
  text-align: ${({ way }) => (way === 'left' ? 'right' : 'center')};
  font-size: 15px;
  margin-vertical: 5px;
`;

export default UserInfoForm;
