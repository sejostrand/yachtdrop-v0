import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '@assets/utils/CartContext';
import { COLORS } from '@assets/theme/theme';
import ListItem from '../objects/ListItem';
import axios from 'axios';
import useMediaQuery from '@assets/utils/useMediaQuery';
import { useCurrentUser } from '@assets/utils/CurrentUser';

const CartContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 9;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const CartHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin: 10px 20px;
`;

const Total = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 18px;
  margin: 10px 20px;
`;

const CartDivider = styled.div`
  display: flex;
  height: 1px;
  margin: 8px 20px;
  background-color: ${COLORS.lightGray};
`;

const CartList = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);

  return (
    <CartContainer>
      <RowContainer>
        <CartHeader>My Cart</CartHeader>
        <Total> Total: &nbsp;&nbsp; € {totalPrice.toFixed(2)}</Total>
      </RowContainer>
      {cart.map((product, index) => (
        <>
          <ListItem
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
        </>
      ))}
    </CartContainer>
  );
};

export default CartList;
