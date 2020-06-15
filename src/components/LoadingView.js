import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import AbsoluteIndicator from 'src/components/AbsoluteIndicator';
const LoadingView = () => {
  return (
    <LoadingViewWrapper>
      <AbsoluteIndicator size="large" />
    </LoadingViewWrapper>
  );
};

const LoadingViewWrapper = styled.View`
  flex: 1;
`;

export default LoadingView;
