import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-flow: column wrap;
  align-self: center;
  width: 100%;
  justify-content: center;
  align-items: center;
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
  opacity: 0.9;
  transition: all 0.2s;
  &:hover {
    opacity: 1;
    padding: 8px 40px;
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
