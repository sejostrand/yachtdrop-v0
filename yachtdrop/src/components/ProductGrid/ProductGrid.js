import React from 'react';

//import styles
import { GridWrapper } from './ProductGrid.style';
import styled from 'styled-components';

//import objects
import ProductTile from './objects/ProductTile';
import ProductIcon from '@img/product-icons/wine/test.jpg';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ProductGrid = ({ products }) => {
  return (
    <FlexContainer>
      <GridWrapper>
        {products.map((product) => (
          <ProductTile
            name={product.product_name}
            description={product.product_description}
            price={product.product_price}
            pack={product.pack}
            imgUrl={product.product_img}
          />
        ))}
      </GridWrapper>
    </FlexContainer>
  );
};

export default ProductGrid;
