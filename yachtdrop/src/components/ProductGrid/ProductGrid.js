import React from 'react';

//import styles
import { GridWrapper } from './ProductGrid.style';

//import objects
import ProductTile from './objects/ProductTile';
import ProductIcon from '@img/product-icons/wine/test.jpg';

const products = [
  {
    id: '1',
    productName: 'Louis Jadot',
    description: 'Red Wine',
    price: '39.99',
  },
  {
    id: '2',
    productName: 'Louis Jadott',
    description: 'Red Wine',
    price: '39.99',
  },
  {
    id: '3',
    productName: 'Louis Jadottt',
    description: 'Red Wine',
    price: '39.99',
  },
];

const product = {
  id: '1',
  productName: 'Louis Jadot',
  description: 'Red Wine',
  price: '39.99',
  pack: '24',
  imgUrl: ProductIcon,
};

const ProductGrid = (props) => {
  return (
    <GridWrapper>
      <ProductTile
        name={props.productName}
        description={product.description}
        price={product.price}
        pack={product.pack}
        imgUrl={product.imgUrl}
      />
    </GridWrapper>
  );
};

export default ProductGrid;
