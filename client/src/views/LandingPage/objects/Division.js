import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

const Container = styled.div`
  display: flex;
  align-self: center;
  margin: 20px 0;
  width: 60vw;
  background-color: ${COLORS.orange};
  height: 6px;
  border-radius: 3px;
  box-shadow: 0px 45px 20px rgb(160, 160, 160);
`;

const Division = () => {
  return <Container />;
};

export default Division;
