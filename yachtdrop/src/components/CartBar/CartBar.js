import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import CartItem from './objects/CartItem';
import axios from 'axios';

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

const ListContainer = styled.div`
  margin: 0px 40px;
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  height: 70vh;
  padding: 5px;
  overflow-y: scroll;
`;

const ButtonContainer = styled.div`
  margin: 15px 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
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
  font-size: 14px;
  font-weight: bold;
`;

const CartBar = (props) => {
  return (
    <Container showCart={props.showCart}>
      <ButtonContainer>
        <Checkout>Proceed to chekcout</Checkout>
        <Total> Total: $ 200</Total>
      </ButtonContainer>
      <ListContainer>
        {props.cartItems.map((product) => (
          <CartItem
            id={product.id}
            fullDescription={product.fullDescription}
            display={product.display}
            subDisplay={product.subDisplay}
            price={product.price}
            packSize={product.packSize}
            imgUrl={'http://localhost:1337' + product.productImg.url}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

export default CartBar;
