import React from 'react';

//import styles
import { GridWrapper } from './ProductGrid.style';
import styled from 'styled-components'

//import objects
import ProductTile from './objects/ProductTile';
import ProductIcon from '@img/product-icons/wine/test.jpg';


const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
/* const products = [
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
]; */

/* const product = {
  id: '1',
  productName: 'Louis Jadot',
  description: 'Red Wine',
  price: '39.99',
  pack: '24',
  imgUrl: ProductIcon,
};
 */
const ProductGrid = ({products}) => {
  return (
    <FlexContainer>
    {products.map((product) => (
    <GridWrapper>
      <ProductTile
        name={product.product_name}
        description={product.product_description}
        price={product.product_price}
        pack={product.pack}
        imgUrl={product.product_img}
      />
    </GridWrapper>
    ))}
    </FlexContainer>
  );
};

export default ProductGrid;
