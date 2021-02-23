import React from 'react';
import styled from 'styled-components';
import ProductTile from './objects/ProductTile.js';

const DisplayWrapper = styled.div`
  margin-left: 300px;
  padding: 20px;
  background-color: lightgray;
  display: flex;
`;

const ProductDisplay = () => {
  return (
    <DisplayWrapper>
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
    </DisplayWrapper>
  );
};

export default ProductDisplay;
