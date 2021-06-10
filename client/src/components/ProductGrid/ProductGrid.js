import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

//import styles

//import objects
import ProductTile from '@components/ProductTile/ProductTile';

const GridWrapper = styled.div`
  min-height: 70vh;
  background-color: ${COLORS.color5};
  padding: 10px;
  margin: 0 1vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  @media (max-width: 960px) {
    padding: 0 auto;
  }
`;

const ProductGrid = (props) => {
  return (
    <GridWrapper>
      {props.products.map((product, index) => (
        <ProductTile
          key={index}
          id={product.id}
          fullDescription={product.fullDescription}
          display={product.display}
          subDisplay={product.subDisplay}
          price={product.price}
          packSize={product.packSize}
          imgUrl={'http://localhost:1337' + product.productImg.url}
        />
      ))}
    </GridWrapper>
  );
};

export default ProductGrid;
