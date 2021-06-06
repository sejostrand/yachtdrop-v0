import React from 'react';

//import styles
import { GridWrapper } from './ProductGrid.style';

//import objects
import ProductTile from '@components/ProductTile/ProductTile';

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
