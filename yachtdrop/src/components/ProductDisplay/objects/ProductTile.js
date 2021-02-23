import React from 'react';
import styled from 'styled-components';
import ProductIcon from '../../../assets/img/wine.jpg';

const TileWrapper = styled.div`
  padding: 5px;
  background-color: white;
  width: 160px;
  height: 250px;
  margin: 10px;
`;

const ProductImage = styled.img`
  width: 150px;
  height: 200px;
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
