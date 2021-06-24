import React from 'react';
import styled from 'styled-components';
import LOGO from '@assets/img/yd-logo-black.png';
import { keyframes } from 'styled-components';
import { COLORS } from '@assets/theme/theme';

const Wrapper = styled.div`
  z-index: 3;
  display: flex;
  position: absolute;
  flex-flow: column wrap;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 0;
  padding: 10px;
  border-radius: 10px;
  transform: translateY(35vw);
  @media (max-width: 900px) {
    transform: translateY(35vw);
  }
`;

const Title = styled.p`
  font-size: 24px;
  color: ${COLORS.orange};
  display: flex;
  margin: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin: 20px 50px;
  @media (max-width: 900px) {
    margin: 10px;
  }
`;

const Button = styled.a`
  background-color: ${COLORS.green};
  color: white;
  font-family: 'Calibri';
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 4px 15px;
  margin: 0 5px;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

const Subtitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
  color: black;
`;

const Caption = styled.div`
  display: flex;
  position: absolute;
  flex-flow: row nowrap;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  justify-content: center;
  transform: translateY(50vw);
`;

const LocationSelection = () => {
  return (
    <>
      <Wrapper>
        <Title>Order drinks to your yacht.</Title>

        <ButtonContainer>
          <Button href='/shoplandingpage'>Mallorca</Button>
          <Button href='/shoppage'>Croaticia</Button>
          <Button href='/shoppage'>Ibiza</Button>
          <Button href='/shoppage'>Menorca</Button>
          <Button href='/shoppage'>Monte Negro</Button>
        </ButtonContainer>
        <Subtitle>Select your location!</Subtitle>
      </Wrapper>
      <Caption>Drinks delivery in 24 hours.</Caption>
    </>
  );
};

export default LocationSelection;
