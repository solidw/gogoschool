import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = () => {
  return (
    <MapScreenWrapper>
      <MapView style={{ flex: 1 }} provider={PROVIDER_GOOGLE} />
    </MapScreenWrapper>
  );
};
const MapScreenWrapper = styled.View`
  flex: 1;
`;

export default MapScreen;
