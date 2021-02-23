import React from 'react';
import styled from 'styled-components';

import NavBar from '../../components/NavBar/NavBar.js';
import FilterBar from '../../components/FilterBar/FilterBar.js';
import Footer from '../../components/Footer/Footer.js';

import './ShopPage.css';

const ShopBodyWrapper = styled.div`
  justify-content: center;
  background-color: lightgray;
`;

const ShopPage = () => {
  return (
    <>
      <NavBar />
      <ShopBodyWrapper>
        <FilterBar />
        <Footer />
      </ShopBodyWrapper>
    </>
  );
};

export default ShopPage;
