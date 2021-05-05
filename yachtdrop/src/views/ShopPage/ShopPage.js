import { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';

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

const ShopPage = (props) => {
  const productFilter = props.productFilter;
  // STATES
  const [filterArray, setFilterArray] = useState([]); //array of filterTags
  const [sortState, setSortState] = useState('popularity'); //state of sorting
  const [defaultProductData, setDefaultProductData] = useState([]); //all products
  const [productData, setProductData] = useState([]); //products filtered by category
  const [filteredProductData, setFilteredProductData] = useState([]); //products filtered by category and search
  const [searchInput, setSearchInput] = useState(''); //state for searchbar input

  const [alphaToggle, setAlphaToggle] = useState();
  const [priceToggle, setPriceToggle] = useState();
  const [sortButtonState, setSortButtonState] = useState();

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:1337/products');
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getProductData = async () => {
      const dataFromServer = await fetchProducts();
      setProductData(dataFromServer);
      setDefaultProductData(dataFromServer);
    };
    getProductData();
  }, []);

  //UPDATES SEARCHBAR FILTER
  useEffect(
    () => [
      setFilteredProductData(
        productData.filter((product) => {
          return product.product_name
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        })
      ),
    ],
    [searchInput, productData]
  );

  //applyProductFilter() functions: filters an array using another array
  const checkArray = (filterTags, productArray) => {
    let hasAllElems = true;
    for (let i = 0; i < filterTags.length; i++) {
      if (productArray.indexOf(filterTags[i]) === -1) {
        hasAllElems = false;
        break;
      }
    }
    return hasAllElems;
  };

  const applyProductFilter = (filterTags, productArray) => {
    return productArray.filter((item) =>
      checkArray(filterTags, item.categories)
    );
  };

  //UPDATES productData ON filterState CHANGE
  useEffect(() => {
    setProductData(applyProductFilter(filterArray, defaultProductData));
  }, [filterArray]);

  const clearFilter = () => {
    productFilter.clearTags();
    setFilterArray([]);
    //setProductData(defaultProductData);
  };

  const primaryFilter = (tag) => {
    productFilter.togglePrimaryTag(tag);
    setFilterArray(productFilter.getTags());
  };

  const secondaryFilter = (tag) => {
    productFilter.toggleSecondaryTag(tag);
    setFilterArray(productFilter.getTags());
  };

  const toggleFilter = (tag) => {
    productFilter.toggleTag(tag);
    setFilterArray(productFilter.getTags());
  };

  // SORTING

  const sortPrice = (tag) => {
    if (priceToggle == true) {
      filteredProductData.sort((a, b) => a.product_price - b.product_price);
    } else {
      filteredProductData.sort((a, b) => b.product_price - a.product_price);
    }
    setPriceToggle(!priceToggle);
    setSortButtonState(tag);
  };

  const sortAlpha = (tag) => {
    if (alphaToggle == true) {
      filteredProductData.sort(function (a, b) {
        a = a.product_name.toLowerCase();
        b = b.product_name.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
      });
    } else {
      filteredProductData.sort(function (a, b) {
        a = a.product_name.toLowerCase();
        b = b.product_name.toLowerCase();

        return a > b ? -1 : a > b ? 1 : 0;
      });
    }
    setAlphaToggle(!alphaToggle);
    setSortButtonState(tag);
  };

  return (
    <StyledShopPage>
      <NavBar />
      <SearchBar setSearchInput={setSearchInput} />
      <BodyWrapper>
        <FilterBar
          productFilter={productFilter}
          primaryFilter={primaryFilter}
          secondaryFilter={secondaryFilter}
          clearFilter={clearFilter}
        />
        <BodyDiv>
          <CoverBar />
          <SortBy
            sortAlpha={sortAlpha}
            sortPrice={sortPrice}
            sortButtonState={sortButtonState}
          />
          <ProductGrid products={filteredProductData} />
        </BodyDiv>
      </BodyWrapper>
      <Footer />
    </StyledShopPage>
  );
};

export default ShopPage;
