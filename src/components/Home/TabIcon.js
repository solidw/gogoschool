import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

const TabIcon = ({ source }) => {
  return <TabIconWrapper source={source} />;
};
const TabIconWrapper = styled.Image`
  width: 25px;
  height: 25px;
  resize-mode: contain;
`;

export default TabIcon;
