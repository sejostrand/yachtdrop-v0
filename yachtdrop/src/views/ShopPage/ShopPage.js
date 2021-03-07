import React from 'react';
import styled from 'styled-components';

// IMPORT COMPONENTS
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar.js';
import Footer from '../../components/Footer/Footer.js';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay.js';
import CoverBar from '../../components/CoverBar/CoverBar';
import BodyWrapper from '../../objects/BodyWrapper.js';
import BodyDiv from '../../objects/BodyDiv.js';
import SortBy from '../../components/SortBy/SortBy.js';

const StyledShopPage = styled.div``;

const ShopPage = () => {
  return (
    <StyledShopPage>
      <NavBar />
      <SearchBar />
      <BodyWrapper>
        <BodyDiv>
          <FilterBar />
        </BodyDiv>
        <BodyDiv>
          <CoverBar />
          <SortBy />
          <ProductDisplay />
        </BodyDiv>
      </BodyWrapper>
      <Footer />
    </StyledShopPage>
  );
};

export default ShopPage;
