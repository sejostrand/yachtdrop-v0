import React from 'react';
import styled from 'styled-components';
import ProductIcon from '../../../assets/img/product-icons/test.jpg';
import AddButton from './AddButton.js';

const TileWrapper = styled.div`
  padding: 5px;
  margin: 20px 10px 20px 10px;
  background-color: #f8faf7;
  display: inline-block;

  &:hover ${AddButton} {
    display: none;
    width: 200px;
    transition: width 0.35s ease-in;
  }
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
`;

const DetailsWrapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 4rem;
`;

const ProductName = styled.div`
  font-size: 20px;
  font-weight: 3px;
  width: 100%;
`;

const ProductPrice = styled.div`
  font-size: 10px;
`;

const ProductDescription = styled.div`
  font-size: 8px;
  padding: 10px;
  width: 100%;
  display: block;
  height: 40px;
`;

const ProductTile = () => {
  return (
    <TileWrapper>
      <ProductImage src={ProductIcon} />
      <AddButton />
      <DetailsWrapper>
        <ProductName>Louis Jadot</ProductName>
        <ProductPrice>$ 34.99</ProductPrice>
      </DetailsWrapper>
    </TileWrapper>
  );
};

export default ProductTile;
