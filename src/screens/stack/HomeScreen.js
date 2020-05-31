import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

import AnimatedProgressWheel from 'react-native-progress-wheel';
import { UserContext } from 'src/contexts/UserContext';
import HomeFooterView from 'src/components/Home/HomeFooterView';

const HomeScreen = ({ route, navigation }) => {
  const [wheelProgress, setWheelProgress] = useState(20);
  const { user, toggleUser } = useContext(UserContext);

  return (
    <HomeScreenWrapper>
      <HeaderView>
        <WhiteText>학교가자_{user.isStudent ? '학생' : '교사'}</WhiteText>
        <TouchableOpacity
          onPress={() => {
            toggleUser();
          }}>
          <Text>학생-교사 전환</Text>
        </TouchableOpacity>
      </HeaderView>
      <BodyView>
        <UserInfoView>
          <WhiteText>{user.name}</WhiteText>
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
              setWheelProgress(wheelProgress < 100 ? wheelProgress + 10 : 0);
            }}
            style={{ backgroundColor: 'white' }}
            activeOpacity={0.3}>
            <Text>Test</Text>
          </TouchableOpacity>
        </ProgressView>
        <HomeFooterView isStudent={user.isStudent} navigation={navigation} />
      </BodyView>
    </HomeScreenWrapper>
  );
};

const HomeScreenWrapper = styled.SafeAreaView`
  flex: 1;
`;

const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-around;
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

const ProgressText = styled.Text`
  position: absolute;
  top: 40%;
  font-size: 24px;
  color: white;
`;
export default HomeScreen;
