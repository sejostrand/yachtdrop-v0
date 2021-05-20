import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

const Container = styled.div`
  margin-top: 44px;
  display: flex;
  flex-flow: column nowrap;
  right: 0;
  position: fixed;
  height: 90vh;
  width: ${(props) => (props.showCart ? '500px' : '0')};
  background-color: ${COLORS.white};
  border-left: 3px solid black;
  border-top: 18px solid black;
  overflow: hidden;
  transition: width 0.2s;
`;

const Title = styled.h1`
  font-size: 28px;
  margin: 25px 40px;
`;

const ListContainer = styled.div`
  margin: 0px 40px;
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  height: 70vh;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  margin: 25px 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Checkout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 200px;
  color: white;
  background-color: ${COLORS.orange};
  padding: 5px;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Total = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 40px;
`;

const CartBar = (props) => {
  return (
    <Container showCart={props.showCart}>
      <Title>Check your Yachtdrop</Title>
      <ListContainer>aa</ListContainer>
      <ButtonContainer>
        <Total> TOTAL: $ 200</Total>
        <Checkout>Proceed to chekcout</Checkout>
      </ButtonContainer>
    </Container>
  );
};

export default CartBar;
