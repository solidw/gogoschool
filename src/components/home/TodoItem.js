import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import Icon from 'src/components/Icon';
import StyledText from 'src/components/StyledText';
import CheckedBox from 'src/lib/assets/checked_box.png';
import UnCheckedBox from 'src/lib/assets/unchecked_box.png';
import AsyncStorage from '@react-native-community/async-storage';
import { MissionContext } from 'src/contexts/MissionContext';

const TodoItem = ({ index, item, addPercentage, iconSource }) => {
  const { missionState, setMissionState } = useContext(MissionContext);
  const isDone = missionState.missions[index];
  const onPressItem = async () => {
    if (!isDone) {
      addPercentage();
    }
    await setMissionState({
      ...missionState,
      missions: { ...missionState.missions, [index]: true },
      isComplete: missionState.isComplete + 1,
    });
    await AsyncStorage.setItem(
      'missions',
      JSON.stringify({
        ...missionState,
        missions: { ...missionState.missions, [index]: true },
        isComplete: missionState.isComplete + 1,
        isLoaded: false,
      }),
    );
  };

  return (
    <TodoItemWrapper isDone={isDone} disabled={isDone} onPress={onPressItem}>
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
  margin: 6px;
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
