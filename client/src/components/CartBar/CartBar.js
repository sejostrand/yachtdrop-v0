import React from 'react';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import CartItem from './objects/CartItem';
import axios from 'axios';
import { CartContext } from '../../assets/utils/CartContext';

const Container = styled.div`
  margin-top: 97px;
  display: flex;
  flex-flow: column nowrap;
  right: 0;
  position: fixed;
  z-index: 10;
  height: 90vh;
  padding-bottom: 50px;
  width: 500px;
  background-color: ${COLORS.white};
  border-left: 3px solid black;
  border-top: 19px solid black;
  overflow: hidden;
  transform: ${(props) => (props.showCart ? 'none' : 'translateX(500px)')};
  transition: ease-in-out 0.1s;
`;

const ListContainer = styled.div`
  margin: 0px 40px;
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  height: auto;
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
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);

  return (
    <Container showCart={props.showCart}>
      <ButtonContainer>
      {cart.length === 0 && <div>Cart is empty</div>}
      {cart.length !== 0 && (
        <>
        <Checkout>Proceed to chekcout</Checkout>
        <Total> Total: $ {totalPrice}</Total>
        </>)}
      </ButtonContainer>
      <ListContainer>
        {cart.map((product, index) => (
          <CartItem
            qty={product.qty}
            key={index}
            id={product.id}
            fullDescription={product.fullDescription}
            display={product.display}
            subDisplay={product.subDisplay}
            price={product.price}
            packSize={product.packSize}
            imgUrl={'http://localhost:1337' + product.imgUrl}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

export default CartBar;