import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '@assets/utils/CartContext';
import { COLORS } from '@assets/theme/theme';
import BG from '@assets/img/sea.jpg';
import ListItem from './objects/ListItem';

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-image: url(${BG});
  background-position: center bottom;
  background-size: auto 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #f8faf7;
  padding: 30px;
  border-radius: 20px;
  margin: 60px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const CheckOut = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);
  return (
    <BodyWrapper>
      <Container>Confirm Order</Container>
      {cart.map((product, index) => (
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
      ))}
    </BodyWrapper>
  );
};

export default CheckOut;
