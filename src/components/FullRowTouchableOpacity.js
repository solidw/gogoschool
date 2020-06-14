import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import StyledText from 'src/components/StyledText';

const FullRowTouchableOpacity = ({ text, background, onPress }) => {
  return (
    <FullRowTouchableOpacityWrapper background={background} onPress={onPress}>
      <StyledText size={20}>{text}</StyledText>
    </FullRowTouchableOpacityWrapper>
  );
};

const FullRowTouchableOpacityWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  margin: 10px;
  border-radius: 8px;
  height: 10%;
  background-color: ${props =>
    props.background ? props.background : palette.hakgyoPurple};
`;

const ColoredText = styled.Text`
  color: ${props => (props.color ? props.color : palette.black)};
  font-size: 20px;
  font-family: 'baskin-robbins-R';
`;

export default FullRowTouchableOpacity;
