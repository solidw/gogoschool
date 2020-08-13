import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/palette';
import { offices } from 'src/lib/offices';
import StyledText from 'src/components/StyledText';

const Locals = ({ local, setLocal }) => {
  return (
    <LocalsWrapper>
      {offices.map(localOffice => (
        <TinyButton
          background={local === localOffice && palette.hakgyoYellow}
          key={localOffice}
          onPress={() => setLocal(localOffice)}>
          <StyledText>{localOffice}</StyledText>
        </TinyButton>
      ))}
    </LocalsWrapper>
  );
};
const LocalsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TinyButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 3px;
  ${({ background }) => background && `background: ${background}`};
  border: 1px solid black;
`;
export default Locals;
