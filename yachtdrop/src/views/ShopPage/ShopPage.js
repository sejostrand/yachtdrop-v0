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

const StyledShopPage = styled.div``;

const ShopPage = () => {
  // STATES
  const [products, setProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [sortState, setSortState] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredSearch, setFilteredSearch] = useState([]);

  // FETCH PRODUCTS
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

  // UseEffect for the search functionality
  useEffect(() => [
    setFilteredSearch(
      products.filter( product => {
        return product.product_name.toLowerCase().includes(search.toLowerCase())
      })
    )
  ], [search, products])

  // FILTERING

  const removeFilterProducts = (tag) => {
    setProducts(defaultProducts);
  };

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

  /* const filteredSearch = products.filter( product => {
    return product.product_name.toLowerCase().includes(search.toLowerCase())
  }) */

  return (
    <StyledShopPage>
      <NavBar />
      <SearchBar />
      <BodyWrapper>
        <FilterBar
          removeFilterProducts={removeFilterProducts}
          toggleFilterProducts={toggleFilterProducts}
          addFilterProducts={addFilterProducts}
        />
        <BodyDiv>
          <CoverBar />
          <input type="text" 
            placeholder="Search" 
            onChange={ char => setSearch(char.target.value)}/>
          <SortBy sortProducts={sortProducts} />
          <ProductGrid filteredSearch={filteredSearch} />
        </BodyDiv>
      </BodyWrapper>
      <Footer />
    </StyledShopPage>
  );
};

export default ShopPage;
