import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// IMPORT COMPONENTS
import NavBar from '@components/NavBar/NavBar';
import SearchBar from '@components/SearchBar/SearchBar';
import FilterBar from '@components/FilterBar/FilterBar.js';
import ProductGrid from '@components/ProductGrid/ProductGrid.js';
import CoverBar from '@components/CoverBar/CoverBar';
import BodyWrapper from '../../objects/BodyWrapper.js';
import BodyDiv from '../../objects/BodyDiv.js';
import SortBy from '@components/SortBy/SortBy.js';

import Footer from '../HomePage/components/Footer/Footer';

//IMPORT PRODUCTS FROM API
function getProducts() {
  axios({
    method: 'GET',
    url: 'https://yachtdrop.herokuapp.com/products',
    responseType: 'stream',
    params: {
      featured: true,
    },
  })
    .then((res) => showProducts(res))
    .catch((err) => console.error(err))
    .then(function () {}); //no se si aca deberia estar creando nuestra variable con los productos
}

function showProducts(res) {
  console.log(res.data);
}

const StyledShopPage = styled.div``;

const ShopPage = () => {
  const prods = getProducts();
  return (
    <StyledShopPage>
      <NavBar />
      <SearchBar />
      <BodyWrapper>
        <FilterBar />
        <BodyDiv>
          <CoverBar />
          <SortBy />
          <ProductGrid productName='' />
        </BodyDiv>
      </BodyWrapper>
      <Footer />
    </StyledShopPage>
  );
};

export default ShopPage;
