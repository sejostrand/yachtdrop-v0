import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import BG from '@assets/img/sea.jpg';

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-image: url(${BG});
  background-position: center bottom;
  background-size: auto 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #f8faf7;
  padding: 30px;
  border-radius: 20px;
  margin: 15vh 0px;
`;

const CheckOut = () => {
  return (
    <BodyWrapper>
      <Container></Container>
    </BodyWrapper>
  );
};

export default CheckOut;
