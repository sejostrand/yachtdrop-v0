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
  margin: 0 15vw;
  padding: 18px;
  border-radius: 10px;
  transform: translateY(-5vw);
  @media (max-width: 900px) {
    transform: translateY(-5vw);
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
`;

const Button = styled.a`
  background-color: ${COLORS.green};
  color: white;
  font-family: 'Calibri';
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 8px 20px;
  margin: 3px 8px;
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
  transform: translateY(5vw);
`;

const Subtitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
  color: black;
  transform: translateY(20px);
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
