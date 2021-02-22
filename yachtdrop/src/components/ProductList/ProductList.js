import React from 'react';
import styled from 'styled-components';

const StyledProductList = styled.div`
  align-content: center;
`;

const Products = [];

const ProductList = () => {
  return <StyledProductList>{children}</StyledProductList>;
};

export default ProductList;
