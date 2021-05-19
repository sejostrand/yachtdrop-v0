import React, { useState } from 'react';

//import styles
import { GridWrapper } from './ProductGrid.style';
import styled from 'styled-components';

//import objects
import ProductTile from './objects/ProductTile';
/* import ProductIcon from '@img/product-icons/wine/test.jpg';
 */

const ProductGrid = (props) => {
  return (
    <FlexContainer>
      <GridWrapper>
        {props.products.map((product, index) => (
          <ProductTile
            id={product.id}
            key={index}
            fullDescription={product.full_description}
            display={product.display}
            subDisplay={product.sub_display}
            price={product.product_price}
            pack={product.pack_size}
            imgUrl={'http://localhost:1337' + product.product_img.url}
          />
        ))}
      </GridWrapper>
    </FlexContainer>
  );
};

export default ProductGrid;
