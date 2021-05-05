import React from 'react';
import styled from 'styled-components';

//import styles
import { CartMenuWrapper, TitleContainer, SingleRow } from './CartMenu.style.js';

//import objects

const CartMenu = () => {
  return (
    <>
    <CartMenuWrapper>
      <TitleContainer>Cart</TitleContainer>
      <SingleRow />
    </CartMenuWrapper>
    </>
  );
};

export default CartMenu;
