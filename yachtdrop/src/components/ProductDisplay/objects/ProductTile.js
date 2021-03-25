import React from 'react';
import styled from 'styled-components';
import ProductIcon from '../../../assets/img/product-icons/test.jpg';
//import AddButton from './AddButton.js';

const AddButtonWrapper = styled.div`
  background-color: #f8694b;
  color: white;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
  margin-top: 115px;
  margin-left: 15px;

  padding: 5px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;

  border-radius: 4px;
  width: 130px;
  height: 50px;
  opacity: 0.7;

  visibility: hidden;

  &:hover {
    opacity: 1;
  }
`;

const TileWrapper = styled.div`
  padding: 5px;
  margin: 20px 10px 20px 10px;
  background-color: #f8faf7;
  display: inline-block;
  cursor: pointer;
  position: relative;
  border-radius: 4px;

  &:hover ${AddButtonWrapper} {
    visibility: visible;
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

const ProductTile = (props) => {
  return (
    <TileWrapper>
      <ProductImage src={ProductIcon} />
      <AddButtonWrapper>ADD</AddButtonWrapper>
      <DetailsWrapper>
        <ProductName>{props.name}</ProductName>
        <ProductDescription>{props.description}</ProductDescription>
        <ProductPrice>{props.price}</ProductPrice>
      </DetailsWrapper>
    </TileWrapper>
  );
};

export default ProductTile;
