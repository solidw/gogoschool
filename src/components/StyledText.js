import styled from 'styled-components';

const StyledText = styled.Text`
  ${({ size }) => size && `font-size: ${size}px`};
  ${({ color }) => color && `color: ${color}`};
  ${({ padding }) => padding && `padding: ${padding}px`};
  ${({ margin }) => margin && `margin: ${margin}px`};
  ${({ center }) => center && 'text-align: center'};

  font-family: 'baskin-robbins-R';
`;

export default StyledText;
