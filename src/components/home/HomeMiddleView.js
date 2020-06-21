import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';

import TodoItem from 'src/components/home/TodoItem';
import Icon from 'src/components/Icon';

import Check from 'src/lib/assets/check.png';
import Mask from 'src/lib/assets/mask.png';
import Wash from 'src/lib/assets/wash.png';
import Water from 'src/lib/assets/water.png';

import CheckDoneStudent from 'src/lib/assets/student_check_done.png';
import CheckNotStudent from 'src/lib/assets/student_check_not.png';

const HomeMiddleView = ({
  isStudent,
  addPercentage,
  studentList = [],
  moveToStudentDetail,
}) => {
  return isStudent ? (
    <StudentMiddleView addPercentage={addPercentage} />
  ) : (
    <TeacherMiddleView
      moveToStudentDetail={moveToStudentDetail}
      studentList={studentList}
    />
  );
};

const StudentMiddleView = ({ addPercentage }) => {
  return (
    <TodoView>
      <TodoItem
        index={1}
        item={'자가진단'}
        addPercentage={addPercentage}
        iconSource={Check}
      />
      <TodoItem
        index={2}
        item={'손씻기'}
        addPercentage={addPercentage}
        iconSource={Wash}
      />
      <TodoItem
        index={3}
        item={'마스크'}
        addPercentage={addPercentage}
        iconSource={Mask}
      />
      <TodoItem
        index={4}
        item={'물/수저'}
        addPercentage={addPercentage}
        iconSource={Water}
      />
    </TodoView>
  );
};

const TeacherMiddleView = ({ studentList, moveToStudentDetail }) => {
  return (
    <CheckView>
      <StyledText size={20} center margin={10}>
        우리반 학생 자가진단 현황
      </StyledText>
      <CheckTouchableOpacity>
        {studentList.map(student => (
          <View key={student.stCode}>
            <Icon
              size={40}
              source={
                student.selfCheck === '1' ? CheckDoneStudent : CheckNotStudent
              }
            />
            <StyledText center>{student.studentNumber}</StyledText>
          </View>
        ))}
      </CheckTouchableOpacity>
    </CheckView>
  );
};

const TodoView = styled.View`
  flex: 1;
  margin-horizontal: 10px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding-vertical: 10px;
`;

const CheckView = styled.View`
  flex: 1;
`;
const CheckTouchableOpacity = styled.View`
  flex: 1;
  flex-direction: row;
  padding-horizontal: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

export default HomeMiddleView;
