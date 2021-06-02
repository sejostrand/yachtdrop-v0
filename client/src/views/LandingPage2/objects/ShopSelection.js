import React from 'react';
import styled from 'styled-components';
import LOGO from '@assets/img/yd-logo-black.png';
import { keyframes } from 'styled-components';

const popUp = keyframes`
from {
  width: 0;
  height: 0;
}
to {
  width: 50px;
  height: 50px;
}
`;

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

const Content = styled.p`
  font-size: 20px;
  color: black;
  display: flex;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 15px;
  @media (max-width: 900px) {
    flex-flow: column nowrap;
  }
`;

//on hover yd icon
const YD = styled.img`
  position: relative;
  width: 50px;
  height: 50px;
  margin: auto;
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
  margin: 5px 10px;
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

const ShopSelection = () => {
  return (
    <Wrapper>
      <Content>Select your Drop Port!</Content>
      <ButtonContainer>
        <Button href='/shoppage'>Mallorca</Button>
        <Button href='/shoppage'>Croaticia</Button>
        <Button href='/shoppage'>Ibiza</Button>
        <Button href='/shoppage'>Menorca</Button>
        <Button href='/shoppage'>Monte Negro</Button>
      </ButtonContainer>
      <Caption>Drinks delivery in 24 hours.</Caption>
    </Wrapper>
  );
};

export default ShopSelection;
