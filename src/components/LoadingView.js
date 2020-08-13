import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import AbsoluteIndicator from 'src/components/AbsoluteIndicator';
import AppIcon from 'src/lib/assets/appicon.png';
import Icon from 'src/components/Icon';
import StyledText from 'src/components/StyledText';

const LoadingView = () => {
  return (
    <LoadingViewWrapper>
      <Icon size={300} source={AppIcon} />
      <StyledText size={30}>학교가자 로딩중입니다.</StyledText>
      <AbsoluteIndicator size="large" />
    </LoadingViewWrapper>
  );
};

const LoadingViewWrapper = styled.View`
  flex: 1;
  background: ${palette.white};
  justify-content: center;
  align-items: center;
`;

export default LoadingView;
