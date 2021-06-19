import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { COLORS } from '@assets/theme/theme';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-height: ${(props) => (props.visible ? 'none' : '0')};
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  overflow: hidden;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 5px;
  background-color: ${COLORS.white};
  border-radius: 7px;
`;

const ImgWrapper = styled.img`
  height: 80px;
  width: auto;
  border-radius: 7px;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 5px;
  font-size: 16px;
  width: 300px;
`;

const Display = styled.div`
  font-size: 16px;
  margin: 2px;
`;

const SubDisplay = styled.div`
  font-size: 12px;
  color: ${COLORS.lightGray};
  margin: 2px;
`;

const Price = styled.div`
  font-size: 10px;
  margin: 2px;
`;

const QTY = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const SmallFont = styled.span`
  font-size: 10px;
`;

const ToggleButton = styled.a`
  display: flex;
  background-color: ${COLORS.orange};
  align-content: center;
  justify-content: center;
  color: white;
  padding: 2px 10vw;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;
  height: 24px;
`;

const ProductList = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [visible, setVisible] = useState(false);

  const getProducts = () => {
    let result = [];
    props.products.forEach((product) => {
      if (Object.keys(props.cartItems).includes(product.id)) {
        result.push(product);
        result[result.length - 1]['quantity'] = `${product.id}`
          .split('.')
          .reduce((p, c) => (p && p[c]) || null, props.cartItems); //this function accesses the quantity for each product
      }
    });
    console.log(result);
    return result;
  };

  useEffect(() => {
    setCartItems(getProducts());
  }, []);

  return (
    <Wrapper>
      <ToggleButton onClick={() => setVisible(!visible)}>
        {!visible ? '▶ ' : '▼ '}&nbsp;&nbsp;&nbsp;Cart
      </ToggleButton>
      <Container visible={visible}>
        {cartItems.map((product) => {
          return (
            <ProductContainer>
              <ImgWrapper
                src={'http://localhost:1337' + product.productImg.url}
              />
              <Details>
                <Display>{product.display}</Display>
                <SubDisplay>{product.subDisplay}</SubDisplay>
                <Price>€ {product.price}</Price>
              </Details>
              <QTY>
                <SmallFont>x </SmallFont>
                {product.quantity}
              </QTY>
            </ProductContainer>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default ProductList;
