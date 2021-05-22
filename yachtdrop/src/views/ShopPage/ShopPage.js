import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import { COLORS, FONTS } from '../../assets/theme/theme';
import axios from 'axios';
import History from '@components/History';
import { wineCategoryQuery, spiritCategoryQuery } from '@assets/utils/queries';

// IMPORT COMPONENTS
import NavBar from '@components/NavBar/NavBar';
import SearchBar from '@components/SearchBar/SearchBar';
import FilterBar from '@components/FilterBar/FilterBar.js';
import CoverBar from '@components/CoverBar/CoverBar';
import BodyWrapper from '../../objects/BodyWrapper.js';
import BodyDiv from '../../objects/BodyDiv.js';
import SortBy from '@components/SortBy/SortBy.js';
import Footer from '@components/Footer/Footer';
import ProductGrid from '@components/ProductGrid/ProductGrid';
import CartBar from '@components/CartBar/CartBar';

// MAIN
const ShopPage = (props) => {
  //const [q, setQ] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [categoryTags, setCategoryTags] = useState([]);

  //GET ALL PRODUCTS
  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    console.log(params.toString());
    const url = `http://localhost:1337/products?${params.toString()}`;
    //History.push(`products?category.category=${category}`);
    const getProductData = axios
      .get(url)
      .then((response) => setDisplayedProducts(response.data))
      .catch((error) => console.log(error));
  }, [category, subCategory, categoryTags]);

  //const params = new URLSearchParams(document.location.search);

  return (
    <>
      <SearchBar products={displayedProducts} />
      <BodyWrapper>
        <FilterBar
          category={category}
          setCategory={setCategory}
          subCategory={subCategory}
          setSubCategory={setSubCategory}
        />
        <BodyDiv>
          <CoverBar />
          <SortBy />
          <ProductGrid products={displayedProducts} />
        </BodyDiv>
      </BodyWrapper>
    </>
  );
};

export default ShopPage;

// // ******** FETCH PRODUCTS FROM SERVER ********
//   // ********************************
//   const axios = require('axios');

//   // Make a request for a user with a given ID

//   // ******** SET PRODUCTS FROM SERVER **********
//   // ********************************
//   useEffect(() => {
//     const getProductData = async () => {

//     getProductData();
//   }, []);

//   //ROUTING FUNCTIONS

//   // ******** UPDATES SEARCHBAR FILTER ********
//   // ********************************

//   useEffect(
//     () => [
//       setFilteredProductData(
//         productData.filter((product) => {
//           return product.product_name
//             .toLowerCase()
//             .includes(searchInput.toLowerCase());
//         })
//       ),
//     ],
//     [searchInput, productData]
//   );

//   // ********************************
//   // applyProductFilter() functions: filters an array using another array
//   const checkEveryArray = (filterTags, productArray) => {
//     let hasAllElems = true;
//     for (let i = 0; i < filterTags.length; i++) {
//       if (productArray.indexOf(filterTags[i]) === -1) {
//         hasAllElems = false;
//         break;
//       }
//     }
//     return hasAllElems;
//   };

//   const checkSomeArray = (filterTags, productTags) => {
//     let hasElem = false;

//     for (let i = 0; i < filterTags.length; i++) {
//       if (productTags.includes(filterTags[i])) {
//         hasElem = true;
//         break;
//       }
//     }
//     return hasElem;
//   };

//   const applyProductFilter = (filterTags1, filterTags2, productTags) => {
//     const newProductArray = productTags.filter((item) =>
//       checkEveryArray(filterTags1, item.categories)
//     );

//     if (filterTags2.length == 0) {
//       return newProductArray;
//     } else {
//       return newProductArray.filter((item) =>
//         item.categories.some((e) => filterArray2.includes(e))
//       );
//     }
//   };

//   //UPDATES productData ON filterState CHANGE
//   // ********************************
//   useEffect(() => {
//     let result;
//     setProductData(
//       applyProductFilter(filterArray1, filterArray2, defaultProductData)
//     );
//     console.log('updated');
//   }, [filterArray1, counter]);

//   // Filtering (modifies filterState to trigger)
//   //********************************
//   const clearFilter = () => {
//     productFilter.clearTags();
//     setFilterArray1([]);
//     setFilterArray2([]);
//     //setProductData(defaultProductData);
//   };

//   const primaryFilter = (tag) => {
//     productFilter.togglePrimaryTag(tag);
//     setFilterArray1(productFilter.getTags());
//   };

//   const secondaryFilter = (tag) => {
//     productFilter.toggleSecondaryTag(tag);
//     setFilterArray1(productFilter.getTags());
//   };

//   const toggleFilter = (tag) => {
//     productFilter.toggleTag(tag);
//     productFilter.otherTags.length == 0
//       ? setFilterArray2([])
//       : setFilterArray2(productFilter.otherTags);
//     setCounter(counter + 1);
//   };

//   // SORTING
//   // ********************************
//   const sortPrice = (tag) => {
//     if (priceToggle == true) {
//       filteredProductData.sort((a, b) => a.price - b.price);
//     } else {
//       filteredProductData.sort((a, b) => b.price - a.price);
//     }
//     setPriceToggle(!priceToggle);
//     setSortButtonState(tag);
//   };

//   const sortAlpha = (tag) => {
//     if (alphaToggle == true) {
//       filteredProductData.sort(function (a, b) {
//         a = a.display.toLowerCase();
//         b = b.display.toLowerCase();

//         return a < b ? -1 : a > b ? 1 : 0;
//       });
//     } else {
//       filteredProductData.sort(function (a, b) {
//         a = a.display.toLowerCase();
//         b = b.display.toLowerCase();

//         return a > b ? -1 : a > b ? 1 : 0;
//       });
//     }
//     setAlphaToggle(!alphaToggle);
//     setSortButtonState(tag);
//   };
