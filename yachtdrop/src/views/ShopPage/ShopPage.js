import React from 'react';
import styled from 'styled-components';

import NavBar from '../../components/NavBar/NavBar.js';
import FilterBar from '../../components/FilterBar/FilterBar.js';
import Footer from '../../components/Footer/Footer.js';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay.js';
import CaptionBar from '../../objects/CaptionBar.js';

import './ShopPage.css';

const ShopBodyWrapper = styled.div`
  justify-content: center;
  background-color: lightgray;
  padding-top: 92px;
`;

const ShopPage = () => {
  return (
    <>
      <NavBar />
      <FilterBar />
      <ShopBodyWrapper>
        <CaptionBar />
        <ProductDisplay />
        <Footer />
      </ShopBodyWrapper>
    </>
  );
};

export default ShopPage;
