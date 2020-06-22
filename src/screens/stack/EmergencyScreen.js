import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';
import FullRowTouchableOpacity from 'src/components/FullRowTouchableOpacity';

import TeacherManual from 'src/lib/manual/teacher_manual.png';
import BeforeOnSchool from 'src/lib/manual/emergency_before_on_school.png';
import OnSchool from 'src/lib/manual/emergency_on_school.png';
import OnEducaion from 'src/lib/manual/emergency_on_education.png';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const ViewList = [TeacherManual, BeforeOnSchool, OnSchool, OnEducaion];
const EmergencyScreen = () => {
  const [viewIndex, setViewIndex] = useState(0);

  const onClickButton = index => {
    setViewIndex(index);
  };

  return (
    <EmergencyScreenWrapper>
      <ButtonView>
        <FullRowTouchableOpacity
          margin={2}
          background={viewIndex === 0 ? palette.warningRed : palette.green}
          onPress={() => onClickButton(0)}>
          <StyledText color={viewIndex === 0 && palette.white}>
            교사메뉴얼
          </StyledText>
        </FullRowTouchableOpacity>
        <FullRowTouchableOpacity
          margin={2}
          background={viewIndex === 1 ? palette.warningRed : palette.green}
          onPress={() => onClickButton(1)}>
          <StyledText color={viewIndex === 1 && palette.white}>
            등교 전
          </StyledText>
        </FullRowTouchableOpacity>
        <FullRowTouchableOpacity
          margin={2}
          background={viewIndex === 2 ? palette.warningRed : palette.green}
          onPress={() => onClickButton(2)}>
          <StyledText color={viewIndex === 2 && palette.white}>
            등교 시
          </StyledText>
        </FullRowTouchableOpacity>
        <FullRowTouchableOpacity
          margin={2}
          background={viewIndex === 3 ? palette.warningRed : palette.green}
          onPress={() => onClickButton(3)}>
          <StyledText color={viewIndex === 3 && palette.white}>
            수업 중
          </StyledText>
        </FullRowTouchableOpacity>
      </ButtonView>

      <FullImage source={ViewList[viewIndex]} />
    </EmergencyScreenWrapper>
  );
};
const EmergencyScreenWrapper = styled.ScrollView`
  flex: 1;
  background: ${palette.white};
`;

const FullImage = styled.Image`
  flex: 1;
  width: ${deviceWidth}px;
  height: ${deviceHeight}px;
  resize-mode: stretch;
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 5px;
  border-bottom-width: 3px;
`;
export default EmergencyScreen;
