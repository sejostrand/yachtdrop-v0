//import React from 'react';
import styled from 'styled-components';

const StyledProductTile = styled.div`
  background-color: black;
  height: 100px;
  align-content: center;
`;

const ProductName = styled.div`
  font-size: 20px;
  color: white;
  align-self: center;
  justify-self: center;
`;

const ProductTile = () => {
  return (
    <body>
      <StyledProductTile>
        <ProductName></ProductName>
      </StyledProductTile>
    </body>
  );
};

export default ProductTile;
