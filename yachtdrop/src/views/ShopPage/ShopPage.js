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
import Footer from '@components/Footer/Footer';

// MAIN
const ShopPage = (props) => {
  const productFilter = props.productFilter;
  const [counter, setCounter] = useState(0);
  // Product/Tags STATES
  const [filterArray1, setFilterArray1] = useState([]); //array of filterTags
  const [filterArray2, setFilterArray2] = useState([]);
  const [defaultProductData, setDefaultProductData] = useState([]); //all products
  const [productData, setProductData] = useState([]); //products filtered by category
  // Search Bar States
  const [filteredProductData, setFilteredProductData] = useState([]); //products filtered by category and search
  const [searchInput, setSearchInput] = useState(''); //state for searchbar input
  // Sorting States
  const [sortState, setSortState] = useState('popularity'); //state of sorting
  const [alphaToggle, setAlphaToggle] = useState();
  const [priceToggle, setPriceToggle] = useState();
  const [sortButtonState, setSortButtonState] = useState();

  // ******** FETCH PRODUCTS FROM SERVER ********
  // ********************************
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:1337/products');
    const data = await res.json();
    return data;
  };

  // ******** SET PRODUCTS FROM SERVER **********
  // ********************************
  useEffect(() => {
    const getProductData = async () => {
      const dataFromServer = await fetchProducts();
      setProductData(dataFromServer);
      setDefaultProductData(dataFromServer);
    };
    getProductData();
  }, []);

  //ROUTING FUNCTIONS

  // ******** UPDATES SEARCHBAR FILTER ********
  // ********************************

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

  // ********************************
  // applyProductFilter() functions: filters an array using another array
  const checkEveryArray = (filterTags, productArray) => {
    let hasAllElems = true;
    for (let i = 0; i < filterTags.length; i++) {
      if (productArray.indexOf(filterTags[i]) === -1) {
        hasAllElems = false;
        break;
      }
    }
    return hasAllElems;
  };

  const checkSomeArray = (filterTags, productTags) => {
    let hasElem = false;

    for (let i = 0; i < filterTags.length; i++) {
      if (productTags.includes(filterTags[i])) {
        hasElem = true;
        break;
      }
    }
    return hasElem;
  };

  const applyProductFilter = (filterTags1, filterTags2, productTags) => {
    const newProductArray = productTags.filter((item) =>
      checkEveryArray(filterTags1, item.categories)
    );

    if (filterTags2.length == 0) {
      return newProductArray;
    } else {
      return newProductArray.filter((item) =>
        item.categories.some((e) => filterArray2.includes(e))
      );
    }
  };

  //UPDATES productData ON filterState CHANGE
  // ********************************
  useEffect(() => {
    let result;
    setProductData(
      applyProductFilter(filterArray1, filterArray2, defaultProductData)
    );
    console.log('updated');
  }, [filterArray1, counter]);

  // Filtering (modifies filterState to trigger)
  //********************************
  const clearFilter = () => {
    productFilter.clearTags();
    setFilterArray1([]);
    setFilterArray2([]);
    //setProductData(defaultProductData);
  };

  const primaryFilter = (tag) => {
    productFilter.togglePrimaryTag(tag);
    setFilterArray1(productFilter.getTags());
  };

  const secondaryFilter = (tag) => {
    productFilter.toggleSecondaryTag(tag);
    setFilterArray1(productFilter.getTags());
  };

  const toggleFilter = (tag) => {
    productFilter.toggleTag(tag);
    productFilter.otherTags.length == 0
      ? setFilterArray2([])
      : setFilterArray2(productFilter.otherTags);
    setCounter(counter + 1);
  };

  // SORTING
  // ********************************
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

  // Rendering
  // ********************************

  return (
    <>
      <NavBar />
      <SearchBar setSearchInput={setSearchInput} />
      <BodyWrapper>
        <FilterBar
          productFilter={productFilter}
          primaryFilter={primaryFilter}
          secondaryFilter={secondaryFilter}
          toggleFilter={toggleFilter}
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
    </>
  );
};

export default ShopPage;
