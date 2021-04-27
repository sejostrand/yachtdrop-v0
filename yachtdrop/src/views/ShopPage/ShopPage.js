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

/*
  one state two function.
*/

const StyledShopPage = styled.div``;

const ShopPage = () => {
  //STATES
  const [products, setProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [sortState, setSortState] = useState([]);

  // Fetch Products
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:1337/products');
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    const getProduct = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
      setDefaultProducts(productsFromServer);
    };
    getProduct();
  }, []);

  // FILTERING

  const toggleFilterProducts = (tag) => {
    const defaultFilteredData = defaultProducts.filter((product) =>
      product.categories.includes(tag)
    );
    setProducts(defaultFilteredData);
  };

  const addFilterProducts = (tag) => {
    const filteredData = products.filter((product) =>
      product.categories.includes(tag)
    );
    setProducts(filteredData);
  };

  // SORTING

  const sortProducts = () => {
    const sortedData = products.sort(
      (a, b) => a.product_price - b.product_price
    );
    setProducts(sortedData);
  };

  console.log(products);

  return (
    <StyledShopPage>
      <NavBar />
      <SearchBar />
      <BodyWrapper>
        <FilterBar
          toggleFilterProducts={toggleFilterProducts}
          addFilterProducts={addFilterProducts}
        />
        <BodyDiv>
          <CoverBar />
          <SortBy sortProducts={sortProducts} />
          <ProductGrid products={products} />
        </BodyDiv>
      </BodyWrapper>
      <Footer />
    </StyledShopPage>
  );
};

export default ShopPage;
