import React from 'react';
import styled from 'styled-components';

// IMPORT COMPONENTS
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar.js';
import Footer from '../../components/Footer/Footer.js';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay.js';
import CaptionBar from '../../objects/CaptionBar.js';
import BodyWrapper from '../../components/BodyWrapper/BodyWrapper.js';

const ShopPage = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <BodyWrapper>
        <CaptionBar />
        <ProductDisplay />
        <Footer />
      </BodyWrapper>
    </>
  );
};

export default ShopPage;
