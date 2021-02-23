import React from 'react';
import styled from 'styled-components';
import ProductTile from './objects/ProductTile.js';

const DisplayWrapper = styled.div`
  padding: 10px;
  background-color: lightgray;
`;

const ProductDisplay = () => {
  return <ProductTile />;
};

export default ProductDisplay;
