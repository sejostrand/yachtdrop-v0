import React from 'react';
import styled from 'styled-components';

import NavBar from '../../components/NavBar/NavBar.js';
import FilterBar from '../../components/FilterBar/FilterBar.js';
import Footer from '../../components/Footer/Footer.js';
import ProductTile from '../../components/ProductDisplay/objects/ProductTile.js';
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
        <ProductTile />
        <Footer />
      </ShopBodyWrapper>
    </>
  );
};

export default ShopPage;
