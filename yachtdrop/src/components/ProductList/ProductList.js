import React from 'react';
import styled from 'styled-components';

const StyledProductList = styled.div`
  align-content: center;
`;

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

const Products = httpGet('http://localhost:1337/products/1');

const ProductList = () => {
  return <StyledProductList>{Products.Product_name}</StyledProductList>;
};

export default ProductList;
