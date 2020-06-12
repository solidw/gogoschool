import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import TodoItem from 'src/components/Home/TodoItem';
import Icon from 'src/components/Home/Icon';

import Check from 'src/lib/assets/check.png';
import Mask from 'src/lib/assets/mask.png';
import Wash from 'src/lib/assets/wash.png';
import Water from 'src/lib/assets/water.png';

import CheckDoneStudent from 'src/lib/assets/student_check_done.png';
import CheckNotStudent from 'src/lib/assets/student_check_not.png';

const HomeMiddleView = ({ isStudent, addPercentage, studentList }) => {
  return isStudent ? (
    <StudentMiddleView addPercentage={addPercentage} />
  ) : (
    <TeacherMiddleView studentList={studentList} />
  );
};

const StudentMiddleView = ({ addPercentage }) => {
  return (
    <TodoView>
      <TodoItem
        item={'자가진단'}
        addTenProgress={addPercentage}
        iconSource={Check}
      />
      <TodoItem
        item={'손씻기'}
        addTenProgress={addPercentage}
        iconSource={Wash}
      />
      <TodoItem
        item={'마스크'}
        addTenProgress={addPercentage}
        iconSource={Mask}
      />
      <TodoItem
        item={'물/수저'}
        addTenProgress={addPercentage}
        iconSource={Water}
      />
    </TodoView>
  );
};

const TeacherMiddleView = ({ studentList }) => {
  return (
    <CheckView>
      <CheckTouchableOpacity>
        {studentList.map(student => (
          <View key={student.id}>
            <Icon
              size={40}
              source={student.self_check ? CheckDoneStudent : CheckNotStudent}
            />
            <Text style={{ textAlign: 'center' }}>{student.id}</Text>
          </View>
        ))}
      </CheckTouchableOpacity>
    </CheckView>
  );
};

const HomeMiddleViewWrapper = styled.View``;

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
const CheckTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding-horizontal: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

export default HomeMiddleView;
