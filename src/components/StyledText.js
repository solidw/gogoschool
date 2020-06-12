import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

const StyledText = styled.Text`
  ${({ size }) => size && `font-size: ${size}px`};
  ${({ color }) => color && `color: ${color}`};
`;

export default StyledText;