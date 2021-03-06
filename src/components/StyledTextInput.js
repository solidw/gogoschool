import styled from 'styled-components';

const StyledTextInput = styled.TextInput`
  ${({ size }) => size && `font-size: ${size}px`};
  ${({ color }) => color && `color: ${color}`};
  ${({ padding }) => padding && `padding: ${padding}px`};
  ${({ margin }) => margin && `margin: ${margin}px`};
  font-family: 'baskin-robbins-R';
`;

export default StyledTextInput;
