import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import AnimatedProgressWheel from 'react-native-progress-wheel';
const MapScreen = () => {
  return (
    <MapScreenWrapper>
      <AnimatedProgressWheel
        size={120}
        width={20}
        color={'yellow'}
        progress={40}
        backgroundColor={'orange'}
      />
    </MapScreenWrapper>
  );
};
const MapScreenWrapper = styled.View``;

export default MapScreen;
