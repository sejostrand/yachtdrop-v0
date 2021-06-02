import React from 'react';
import styled from 'styled-components';
import LOGO from '@assets/img/yd-logo-black.png';
import { keyframes } from 'styled-components';
import { COLORS } from '@assets/theme/theme';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-flow: column wrap;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  transform: translateY(-100px);
  @media (max-width: 900px) {
    transform: translateY(-150px);
  }
`;

const Title = styled.p`
  font-size: 24px;
  color: ${COLORS.orange};
  display: flex;
  margin-top: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 24px;
  @media (max-width: 900px) {
    flex-flow: column nowrap;
  }
`;

const Button = styled.a`
  background-color: #f8694b;
  color: white;
  font-family: 'Calibri';
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 8px 20px;
  margin: 0px 10px;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
  transition: all 0.2s;
  transform: scale(0.9);
  &:hover {
    opacity: 0.8;
    transform: scale(1);
  }
`;

const Caption = styled.div`
  display: flex;
  position: relative;
  flex-flow: row nowrap;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  transform: translateY(80px);
`;

const Subtitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 16px;
  letter-spacing: 1px;
  color: black;
  margin-top: 20px;
`;

const ShopSelection = () => {
  return (
    <Wrapper>
      <Title>Order drinks to your yacht.</Title>

      <ButtonContainer>
        <Button href='/shoppage'>Mallorca</Button>
        <Button href='/shoppage'>Croaticia</Button>
        <Button href='/shoppage'>Ibiza</Button>
        <Button href='/shoppage'>Menorca</Button>
        <Button href='/shoppage'>Monte Negro</Button>
      </ButtonContainer>
      <Subtitle>Select your location!</Subtitle>
      <Caption>Drinks delivery in 24 hours.</Caption>
    </Wrapper>
  );
};

export default ShopSelection;
