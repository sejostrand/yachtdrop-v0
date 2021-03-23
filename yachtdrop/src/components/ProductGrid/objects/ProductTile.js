import React from 'react';
import styled from 'styled-components';

//import styles
import {
  TileWrapper,
  PackSize,
  ProductImage,
  AddButtonWrapper,
  DetailsWrapper,
  ProductName,
  ProductPrice,
  ProductDescription,
} from './ProductTile.style';

//import objects
import ProductIcon from '../../../assets/img/product-icons/wine/test.jpg';

const ProductTile = () => {
  return (
    <TileWrapper>
      <PackSize>24 PACK</PackSize>
      <ProductImage src={ProductIcon} />
      <DetailsWrapper>
        <ProductName>Louis Jadot</ProductName>
        <ProductDescription>Red Wine</ProductDescription>
        <ProductPrice>$ 34.99</ProductPrice>
      </DetailsWrapper>
      <AddButtonWrapper>ADD</AddButtonWrapper>
    </TileWrapper>
  );
};

export default ProductTile;
