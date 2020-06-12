import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import TodoIcon from 'src/components/Home/TodoIcon';

const TodoItem = ({ item, addTenProgress, iconSource }) => {
  const [isDone, setDone] = useState(false);
  const onPressItem = () => {
    if (!isDone) {
      addTenProgress();
    }
    setDone(!isDone);
  };
  return (
    <TodoItemWrapper isDone={isDone} onPress={onPressItem} disabled={isDone}>
      <Text>{item}</Text>
      <TodoIcon source={iconSource} />
      <Text>{isDone ? 'O' : 'X'}</Text>
    </TodoItemWrapper>
  );
};
const TodoItemWrapper = styled.TouchableOpacity`
  flex-basis: 50%;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px;
  padding-horizontal: 10px;
  padding-vertical: 5px;
  background-color: ${props => (props.isDone ? palette.hakgyoPurple : 'white')};
`;

styled.Text``;

export default TodoItem;
