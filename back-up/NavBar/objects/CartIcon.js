import React from 'react';
import styled from 'styled-components';

const StyledCartIcon = styled.div`
  color: white;
  background-color: #f8694b;
  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  height: 2rem;
  border-radius: 8px;
  padding: 8px 40px;
  margin-top: 6px;
  display: inline-block;
  float: right;
  cursor: pointer;

  &:hover {
    border: 3px solid #f8694b;
    background-color: #f8faf7;
    color: black;
  }
`;

const CartIcon = () => {
  return <StyledCartIcon>Cart</StyledCartIcon>;
};

export default CartIcon;
