import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex-flow: column wrap;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  transform: translateY(400px);
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
  transition: all 0.1s;
  &:hover {
    opacity: 0.8;
  }
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
    </Wrapper>
  );
};

export default ShopSelection;
