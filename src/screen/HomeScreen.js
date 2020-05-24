import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styled from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import palette from 'src/lib/palette';

import * as Progress from 'react-native-progress';

const Stack = createStackNavigator();
const HomeScreen = () => {
  const [userProgress, setUserProgress] = useState(0);

  const animate = () => {
    let progress = 0.1;
    setUserProgress({ progress });
    setTimeout(() => {
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        setUserProgress({ progress });
      }, 500);
    }, 1500);
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <HomeScreenWrapper>
      <HeaderView>
        <WhiteText>학교가자</WhiteText>
      </HeaderView>
      <BodyView>
        <UserInfoView>
          <WhiteText>고태완</WhiteText>
          <WhiteText>이미지</WhiteText>
          <WhiteText>레벨</WhiteText>
        </UserInfoView>
        <ProgressView>
          <Progress.Circle
            style={{ marginVertical: 20 }}
            progress={0.25}
            animated={true}
            color={palette.white}
            showsText={true}
            size={120}
            formatText={progress => progress * 100 + '%'}
          />
        </ProgressView>
        <FooterView>
          <Text>QR</Text>
          <Text>학교</Text>
          <Text>퀴즈</Text>
          <Text>메뉴얼</Text>
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

const ProgressView = styled.View`
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const FooterView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 10px;
`;

export default HomeScreen;
