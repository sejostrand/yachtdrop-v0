import React from 'react';
import styled from 'styled-components';
import ProductTile from './objects/ProductTile.js';
import RowWrapper from './objects/RowWrapper.js';

const DisplayWrapper = styled.div`
  padding: 20px 0px;
  background-color: #f8faf7;
  width: 100%;
`;

const Title = styled.h1`
  color: black;
  font-size: 30px;
  padding-top: 20px;
  padding-left: 30px;
  display: relative;
`;

const ProductDisplay = () => {
  return (
    <DisplayWrapper>
      <Title>Red Wine</Title>
      <RowWrapper>
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
      </RowWrapper>
      <RowWrapper>
        <Title>Red Wine</Title>
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
      </RowWrapper>
    </DisplayWrapper>
  );
};

export default ProductDisplay;
