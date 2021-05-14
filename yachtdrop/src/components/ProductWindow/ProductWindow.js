import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
`;

const Window = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: white;
  margin: auto;
  border-radius: 10px;
  padding: 10px;
  align-items: start;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: auto;
`;

const ProductImg = styled.img`
  height: 50vh;
  width: auto;
  display: flex;
`;

const Cross = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  cursor: pointer;
`;

const FullDescription = styled.h1`
  font-size: 22px;
  top: 10px;
  margin-top: -30px;
  margin-bottom: 20px;
`;

const Display = styled.p`
  font-size: 18px;
  margin: 5px;
`;

const Price = styled.p`
  font-size: 18px;
  margin: 5px;
`;

const PackSize = styled.p`
  font-size: 18px;
  margin: 5px;
`;

const ProductWindow = (props) => {
  return (
    <Container onClick={() => props.setIsVisible(false)}>
      <Window onClick={() => props.setIsVisible(true)}>
        <Cross onClick={() => props.setIsVisible(false)} />
        <Section>
          <ProductImg src={props.imgUrl} />
        </Section>
        <Section>
          <FullDescription>{props.fullDescription}</FullDescription>
          {props.id}
          <Display>{`Category: ${props.display}`}</Display>
          <Price>
            <p>{`Price: ${props.price}$`}</p>
          </Price>
          <PackSize>{`Pack size: ${props.pack}`}</PackSize>
        </Section>
      </Window>
    </Container>
  );
};

export default ProductWindow;
