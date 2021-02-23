import React from 'react';
import styled from 'styled-components';
import ProductIcon from '../../../assets/img/wine.jpg';

const TileWrapper = styled.div`
  padding: 5px;
  background-color: white;
  width: 200px;
  height: 500px;
`;

const ProductImage = styled.img`
  width: 50px;
`;

const ProductName = styled.div`
  font-size: 12px;
  padding: 3px;
`;

const ProductDescription = styled.div`
  font-size: 5px;
  padding: 3px;
`;

const ProductPrice = styled.div`
  font-size: 9px;
  padding: 3px;
`;

const ProductTile = () => {
  return (
    <TileWrapper>
      <ProductImage src={ProductIcon} />
      <ProductName>Bacardi</ProductName>
      <ProductDescription>Rum with stuff</ProductDescription>
      <ProductPrice>34.99</ProductPrice>
    </TileWrapper>
  );
};

export default ProductTile;
