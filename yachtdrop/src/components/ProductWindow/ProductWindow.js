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

const Title = styled.p`
  font-size: 20px;
`;

const ProductWindow = (props) => {
  return (
    <Container>
      <Window>
        <Cross onClick={() => props.setIsVisible(false)} />
        <Section>
          <ProductImg src={props.imgUrl} />
        </Section>
        <Section>
          <Title>{props.name}</Title>
          {props.id}
          {props.description}
          {props.price}
          {props.pack}
        </Section>
      </Window>
    </Container>
  );
};

export default ProductWindow;
