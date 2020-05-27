import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

import AnimatedProgressWheel from 'react-native-progress-wheel';
import { UserContext } from 'src/contexts/UserContext';

const HomeScreen = ({ route, navigation }) => {
  const [wheelProgress, setWheelProgress] = useState(20);
  const user = useContext(UserContext);

  const { isStudent } = user;
  return (
    <HomeScreenWrapper>
      <HeaderView>
        <WhiteText>학교가자_{isStudent ? '학생' : '교사'}</WhiteText>
        <TouchableOpacity
          onPress={() => {
            user.toggleUser();
          }}>
          <Text>학생-교사 전환</Text>
        </TouchableOpacity>
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
              setWheelProgress(wheelProgress < 100 ? wheelProgress + 10 : 0);
            }}
            style={{ backgroundColor: 'white' }}
            activeOpacity={0.3}>
            <Text>Test</Text>
          </TouchableOpacity>
        </ProgressView>
        {isStudent ? (
          <StudentFooterView navigation={navigation} />
        ) : (
          <TeacherFooterView navigation={navigation} />
        )}
      </BodyView>
    </HomeScreenWrapper>
  );
};

const StudentFooterView = ({ navigation }) => {
  return (
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
  );
};

const TeacherFooterView = ({ navigation }) => {
  return (
    <FooterView>
      <TouchableOpacity onPress={() => navigation.push('QRCode')}>
        <Text>QR코드</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Hakgyo')}>
        <Text>학교가자</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Manual')}>
        <Text>비상 메뉴얼</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Quiz')}>
        <Text>안전 관리 메뉴얼</Text>
      </TouchableOpacity>
    </FooterView>
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
