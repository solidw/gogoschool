import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

const AfterScan = ({ route, navigation }) => {
  const { studentCode } = route.params;
  const [temperture, setTemperture] = useState(0);

  return (
    <AfterScanWrapper>
      <TextInput
        value={temperture}
        onChangeText={temp => setTemperture(temp)}
      />
      <TouchableOpacity>{studentCode}</TouchableOpacity>
    </AfterScanWrapper>
  );
};
const AfterScanWrapper = styled.View``;

export default AfterScan;
