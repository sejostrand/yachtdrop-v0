import React from 'react';
import styled from 'styled-components';
import Cart from '../../../assets/img/cart-icon.png';

const StyledCartIcon = styled.img`
  width: 2.5rem;
  cursor: pointer;
  align-items: center;
  justify-items: center;
  margin-inline: 1rem;
`;

const CartIcon = () => {
  return <StyledCartIcon src={Cart} />;
};

export default CartIcon;
