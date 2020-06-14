import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import palette from 'src/lib/palette';

const FullRowTouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  height: 10%;
  background-color: ${({ background }) =>
    background ? background : palette.hakgyoPurple};
`;

export default FullRowTouchableOpacity;
