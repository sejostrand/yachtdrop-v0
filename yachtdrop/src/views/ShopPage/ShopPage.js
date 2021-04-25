import { useState, useEffect } from 'react';
import styled from 'styled-components';

// IMPORT COMPONENTS
import NavBar from '@components/NavBar/NavBar';
import SearchBar from '@components/SearchBar/SearchBar';
import FilterBar from '@components/FilterBar/FilterBar.js';
import ProductGrid from '@components/ProductGrid/ProductGrid.js';
import CoverBar from '@components/CoverBar/CoverBar';
import BodyWrapper from '../../objects/BodyWrapper.js';
import BodyDiv from '../../objects/BodyDiv.js';
import SortBy from '@components/SortBy/SortBy.js';
import Button from '../../components/Button'

import Footer from '../HomePage/components/Footer/Footer';

//IMPORT PRODUCTS FROM API
/* function getProducts() {
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
} */

const StyledShopPage = styled.div``;

/* const allCategories = ['All', 'All', ...products.map(product => product.produc_name)];
console.log(allCategories); */


const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [buttons, setButtons] = useState([]);


  const filtered = (button) => {
    const filteredData = products.filter(product => product.product_name === button)
    setProducts(filteredData)
  }

  useEffect(() => {
    const getProduct = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };

    getProduct();
  }, []);

  // Fetch Products
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:1337/products');
    const data = await res.json();

    return data;
  };


  /* console.log(products); */

  return (
    <StyledShopPage>
      <NavBar />
      <SearchBar />
      <BodyWrapper>
        <FilterBar />
        <BodyDiv>
          <CoverBar />
          <SortBy />
          <Button filtered={filtered} />
          <ProductGrid products={products}>
          </ProductGrid>
        </BodyDiv>
      </BodyWrapper>
      <Footer />
    </StyledShopPage>
  );
};

export default ShopPage;
