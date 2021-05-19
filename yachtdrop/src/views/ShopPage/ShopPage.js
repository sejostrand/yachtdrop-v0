import { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { COLORS, FONTS } from '../../assets/theme/theme';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';

// IMPORT COMPONENTS
import NavBar from '@components/NavBar/NavBar';
import SearchBar from '@components/SearchBar/SearchBar';
import FilterBar from '@components/FilterBar/FilterBar.js';
//import ProductGrid from '@components/ProductGrid/ProductGrid.js';
import CoverBar from '@components/CoverBar/CoverBar';
import BodyWrapper from '../../objects/BodyWrapper.js';
import BodyDiv from '../../objects/BodyDiv.js';
import SortBy from '@components/SortBy/SortBy.js';
import Footer from '@components/Footer/Footer';
import ProductTile from '@components/ProductTile/ProductTile.js';
import ProductWindow from '@components/ProductWindow/ProductWindow.js';

export const GridWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${COLORS.color5};
  padding: 20px;
  display: flex;
  flex-flow: row wrap;

  justify-content: start;
`;

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

  const PRODUCTS_QUERY = gql`
    query {
      products {
        id
        display
        subDisplay
        fullDescription
        productImg {
          url
        }
        price
        packSize
      }
    }
  `;

  return (
    <>
      <NavBar />
      <SearchBar setSearchInput={setSearchInput} />
      <BodyWrapper>
        <FilterBar />
        <BodyDiv>
          <CoverBar />
          <SortBy />
          <Query query={PRODUCTS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <div>loading...</div>;
              if (error) console.log(error);

              return (
                <GridWrapper>
                  {data.products.map((product) => (
                    <ProductTile
                      product={product}
                      id={product.id}
                      fullDescription={product.fullDescription}
                      display={product.display}
                      subDisplay={product.subDisplay}
                      price={product.price}
                      packSize={product.packSize}
                      imgUrl={'http://localhost:1337' + product.productImg.url}
                    />
                  ))}
                </GridWrapper>
              );
            }}
          </Query>
        </BodyDiv>
      </BodyWrapper>
      <Footer />
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
