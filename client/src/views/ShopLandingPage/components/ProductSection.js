import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductTile from '@components/ProductTile/ProductTile';
import { COLORS } from '@assets/theme/theme';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  padding: 20px;
  margin: 10px 0;
  background-color: white;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
`;

const SubContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 10px;
`;

const Label = styled.div`
  font-size: 20px;
`;

const Link = styled.a`
  font-size: 16px;
  color: ${COLORS.gray};
  margin-left: 60px;
`;

const ProductSection = (props) => {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:1337/products?${props.params}`;
    const getProductData = axios
      .get(url)
      .then((response) => setDisplayedProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <SubContainer>
        <Label>{props.label}</Label>
        <Link href={`http://localhost:3000/shoppage/products?${props.params}`}>
          View more
        </Link>
      </SubContainer>
      <ProductsContainer>
        {displayedProducts.map((product, index) => (
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
      </ProductsContainer>
    </Container>
  );
};

export default ProductSection;
