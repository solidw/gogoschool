import styled from 'styled-components';
import { Image } from 'react-native';

const Icon = styled.Image`
  width: ${props => (props.size ? props.size + 'px' : '50px')};
  height: ${props => (props.size ? props.size + 'px' : '50px')};
  resize-mode: contain;
`;

export default Icon;
