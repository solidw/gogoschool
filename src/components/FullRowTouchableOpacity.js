import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

const FullRowTouchableOpacity = ({ text, background, onPress }) => {
  return (
    <FullRowTouchableOpacityWrapper background={background} onPress={onPress}>
      <ColoredText>{text}</ColoredText>
    </FullRowTouchableOpacityWrapper>
  );
};

const FullRowTouchableOpacityWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  margin: 10px;
  border-radius: 8px;

  background-color: ${props =>
    props.background ? props.background : palette.hakgyoPurple};
`;

const ColoredText = styled.Text`
  color: ${props => (props.color ? props.color : palette.black)};
`;

export default FullRowTouchableOpacity;
