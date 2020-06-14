import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import Icon from 'src/components/Home/Icon';
import StyledText from 'src/components/StyledText';
import CheckedBox from 'src/lib/assets/checked_box.png';
import UnCheckedBox from 'src/lib/assets/unchecked_box.png';

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
      <ItemText size={16}>{item}</ItemText>
      <Icon size={30} source={iconSource} />
      <Icon size={20} source={isDone ? CheckedBox : UnCheckedBox} />
    </TodoItemWrapper>
  );
};
const TodoItemWrapper = styled.TouchableOpacity`
  height: 30%;
  flex-basis: 45%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  margin: 2px;
  border-radius: 5px;
  padding-horizontal: 7px;
  padding-vertical: 5px;
  ${({ isDone }) => isDone && `background-color: ${palette.hakgyoYellow}`};
`;

const ItemText = styled(StyledText)`
  flex-basis: 50%;
  text-align: center;
`;

export default TodoItem;
