import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 12;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
  visibility: hidden;
`;

const Window = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: white;
  height: 50vh;
  width: 50vw;
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

const ProductImg = styled.img``;

const ProductWindow = (props) => {
  return (
    <Container>
      <Window>
        <Section>
          Content
          <ProductImg />
        </Section>
        <Section>Content</Section>
      </Window>
    </Container>
  );
};

export default ProductWindow;
