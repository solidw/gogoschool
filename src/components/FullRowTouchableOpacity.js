import styled from 'styled-components';
import palette from 'src/lib/palette';

const FullRowTouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => `${padding ? padding : 15}px`};
  margin: ${({ margin }) => `${margin ? margin : 10}px`};
  border-radius: 8px;

  background-color: ${({ background }) =>
    background ? background : palette.hakgyoPurple};
`;

export default FullRowTouchableOpacity;
