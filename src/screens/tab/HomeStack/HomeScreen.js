import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

import * as Progress from 'react-native-progress';
import AnimatedProgressWheel from 'react-native-progress-wheel';

const HomeScreen = ({ route, navigation }) => {
  const [userProgress, setUserProgress] = useState(0.2);
  const [wheelProgress, setWheelProgress] = useState(20);

  const { isStudent } = route.params;
  const animate = () => {
    let progress = userProgress;
    progress += Math.round(Math.random() / 5, 1);
    if (progress > 1) {
      progress = 1;
    }
    setUserProgress(progress);
  };

  return (
    <HomeScreenWrapper>
      <HeaderView>
        <WhiteText>학교가자_{isStudent ? '학생' : '교사'}</WhiteText>
      </HeaderView>
      <BodyView>
        <UserInfoView>
          <WhiteText>고태완</WhiteText>
          <WhiteText>이미지</WhiteText>
          <WhiteText>레벨</WhiteText>
        </UserInfoView>
        <ProgressView>
          <View style={{ transform: [{ rotate: '-90deg' }] }}>
            <AnimatedProgressWheel
              size={120}
              width={10}
              color={'red'}
              progress={wheelProgress}
              animateFromValue={0}
              duration={3000}
            />
          </View>
          <ProgressText>{wheelProgress + '%'}</ProgressText>
          <TouchableOpacity
            onPress={() => {
              setUserProgress(userProgress < 1 ? userProgress + 0.1 : 1);
              setWheelProgress(wheelProgress < 100 ? wheelProgress + 10 : 0);
            }}
            style={{ backgroundColor: 'white' }}
            activeOpacity={0.3}>
            <Text>Test</Text>
          </TouchableOpacity>
        </ProgressView>
        <FooterView>
          <TouchableOpacity onPress={() => navigation.push('QRCode')}>
            <Text>QR코드</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Hakgyo')}>
            <Text>학교가자</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Manual')}>
            <Text>메뉴얼</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Quiz')}>
            <Text>퀴즈</Text>
          </TouchableOpacity>
        </FooterView>
      </BodyView>
    </HomeScreenWrapper>
  );
};

const HomeScreenWrapper = styled.SafeAreaView`
  flex: 1;
`;
const HeaderView = styled.View`
  justify-content: center;
  align-items: center;
  height: 36px;

  background-color: ${palette.hakgyoPurple};
`;

const WhiteText = styled.Text`
  color: white;
`;

const BodyView = styled.View`
  padding: 20px 10px;
  flex-grow: 1;
  background-color: ${palette.hakgyoBlue};
`;

const UserInfoView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const FooterView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 10px;
`;

const ProgressView = styled.View`
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const ProgressText = styled.Text`
  position: absolute;
  top: 40%;
  font-size: 24px;
  color: white;
`;
export default HomeScreen;
