import React from 'react';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import CartItem from './objects/CartItem';
import axios from 'axios';
import { CartContext } from '@assets/utils/CartContext';

const Container = styled.div`
  margin-top: 97px;
  display: flex;
  flex-flow: column nowrap;
  right: 0;
  position: fixed;
  z-index: 10;
  height: 100vh;
  padding-bottom: 50px;
  width: 500px;
  background-color: ${COLORS.white};
  border-left: 3px solid black;
  border-top: 19.5px solid black;
  overflow: hidden;
  transform: ${(props) => (props.showCart ? 'none' : 'translateX(500px)')};
  transition: ease-in-out 0.1s;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ListContainer = styled.div`
  margin: 0px 40px;
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  height: auto;
  padding: 5px;
  overflow-y: scroll;
  border-radius: 7px;
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
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
  }
`;

const Total = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const HideButton = styled.div`
  background-color: ${COLORS.green};
  color: white;
  width: fit-content;
  padding: 0px 30px;
  margin: 20px 40px 0px 40px;
  border-radius: 3px;
  font-size: 25px;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const ListTitle = styled.div`
  width: 410px;
  padding: 1px;
  background-color: ${COLORS.green};
  color: white;
  letter-spacing: 2px;
  font-size: 12px;
  margin: 0 40px;
  padding: 2px 10px;
  font-weight: bold;
`;

const EmptyCaption = styled.p`
  font-size: 20px;
  color: black;
  margin: 3px;
`;

const CartBar = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <Container showCart={props.showCart}>
      <HideButton onClick={() => props.setShowCart(false)}>></HideButton>
      <ButtonContainer>
        {cart.length !== 0 && (
          <>
            <Checkout>Proceed to checkout</Checkout>
            <Total> Total € {totalPrice.toFixed(2)}</Total>
          </>
        )}
      </ButtonContainer>
      <ListTitle>MY CART</ListTitle>
      <ListContainer>
        {cart.length === 0 && (
          <>
            <EmptyCaption>Cart is empty.</EmptyCaption>
            <EmptyCaption>Add items to your basket!</EmptyCaption>
          </>
        )}
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
            imgUrl={product.imgUrl}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

export default CartBar;
