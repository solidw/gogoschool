import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

import AnimatedProgressWheel from 'react-native-progress-wheel';
import { UserContext } from 'src/contexts/UserContext';
import HomeFooterView from 'src/components/Home/HomeFooterView';
import TodoItem from 'src/components/Home/TodoItem';

const HomeScreen = ({ route, navigation }) => {
  const [wheelProgress, setWheelProgress] = useState(20);
  const { user, toggleUser } = useContext(UserContext);
  const today = new Date().getDate();

  const addTenProgress = () => {
    setWheelProgress(wheelProgress < 100 ? wheelProgress + 10 : 0);
  };
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
          <WhiteText>
            {today % 2 === 0 ? `${today}일은 짝수날` : `${today}일은 홀수날`}
          </WhiteText>
        </UserInfoView>
        <ProgressView>
          <View>
            <Text>Barcode</Text>
          </View>
          <View style={{ transform: [{ rotate: '-90deg' }] }}>
            <AnimatedProgressWheel
              size={120}
              width={10}
              color={palette.hakgyoBlue}
              progress={wheelProgress}
              animateFromValue={0}
              duration={3000}
            />
          </View>
          {/* <TouchableOpacity
            onPress={addTenProgress}
            style={{ backgroundColor: 'white' }}
            activeOpacity={0.3}>
            <Text>Test</Text>
          </TouchableOpacity> */}
          <ProgressText>{wheelProgress + '%'}</ProgressText>
        </ProgressView>
        <TodoView>
          <TodoItem item={'자가검진'} addTenProgress={addTenProgress} />
          <TodoItem item={'손씻기'} addTenProgress={addTenProgress} />
          <TodoItem item={'테스트'} addTenProgress={addTenProgress} />
        </TodoView>
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
  background-color: ${palette.green};
`;

const UserInfoView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const ProgressView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 20px;
`;

const ProgressText = styled.Text`
  position: absolute;
  right: 20%;
  font-size: 24px;
  color: white;
`;

const TodoView = styled.View`
  margin-horizontal: 10px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-vertical: 10px;
`;

export default HomeScreen;
