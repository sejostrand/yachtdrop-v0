import React, { useState } from 'react';
import axios from 'axios';

//import styles
import { GridWrapper } from './ProductGrid.style';
import styled from 'styled-components';

//import objects
import ProductTile from '@components/ProductTile/ProductTile';

const ProductGrid = (props) => {
  return (
    <GridWrapper>
      {props.products.map((product) => (
        <ProductTile
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
