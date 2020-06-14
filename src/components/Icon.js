import styled from 'styled-components';
import { Image } from 'react-native';

const Icon = styled.Image`
  width: ${({ size }) => (size ? size + 'px' : '50px')};
  height: ${({ size }) => (size ? size + 'px' : '50px')};
  resize-mode: contain;
`;

export default Icon;
