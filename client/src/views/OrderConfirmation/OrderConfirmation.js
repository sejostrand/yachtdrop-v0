import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import { CartContext } from '@assets/utils/CartContext';

const BodyWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  min-height: 80vh;
  padding: 50px;
  background: ${COLORS.white};
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  background-color: #f8faf7;
  padding: 30px;
  border-radius: 20px;
`;

const OrderConfirmation = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);

  useEffect(() => {
    const data = localStorage.getItem('cart');
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <BodyWrapper>
      <Container>JU ju jU</Container>
    </BodyWrapper>
  );
};

export default OrderConfirmation;
