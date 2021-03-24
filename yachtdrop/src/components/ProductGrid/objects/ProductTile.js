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

const ProductTile = (props) => {
  return (
    <TileWrapper>
      <PackSize>{props.pack} PACK</PackSize>
      <ProductImage src={ProductIcon} />
      <DetailsWrapper>
        <ProductName>{props.name}</ProductName>
        <ProductDescription>{props.description}</ProductDescription>
        <ProductPrice>$ {props.price}</ProductPrice>
      </DetailsWrapper>
      <AddButtonWrapper>ADD</AddButtonWrapper>
    </TileWrapper>
  );
};

export default ProductTile;
