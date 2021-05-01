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

const StyledShopPage = styled.div`
  background-color: white;
`;

const ShopPage = () => {
  // FILTER STATES

  // all data
  const [productData, setProductData] = useState([]); //DISPLAYED DATA ARRAY IS filteredProductData
  const [defaultProductData, setDefaultProductData] = useState([]);
  //filter
  const [filterTags, setFilterTags] = useState(['none']); //active filter
  const [primaryFilter, setPrimaryFilter] = useState();
  const [secondaryFilter, setSecondaryFilter] = useState();
  const [checkBoxFilter, setCheckBoxFilter] = useState([]);
  //searchbar
  const [searchInput, setSearchInput] = useState('');
  const [filteredProductData, setFilteredProductData] = useState([]);

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

  //update searchbar filter
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

  //returns array of filtered products using filterTags
  const applyFilter = (defaultArray, filterArray) => {
    if (filterArray == 'none') {
      return defaultArray;
    } else {
      const result = defaultArray.filter((item) => {
        return item.categories.some((tag) => filterArray.includes(tag));
      });
      return result;
    }
  };

  //updates the state filterTags
  const updateFilter = (tag) => {
    if (tag == 'none') {
      setFilterTags(['none']);
    } else {
      if (tag.type == Array) {
        setFilterTags(filterTags.concat(tag));
      } else {
        setFilterTags([tag]);
      }
    }
  };

  //updates filtered products whenever filterTags is modified
  useEffect(
    () => [setProductData(applyFilter(defaultProductData, filterTags))],
    [filterTags]
  );

  // SET FILTER TAGS

  const clearFilter = (tag) => {
    setFilterTags('none');
    setFilterButtonState(tag);
  };

  useEffect(() => [setFilterTags(checkBoxFilter.concat(primaryFilter))], [
    primaryFilter,
  ]);

  useEffect(() => [setFilterTags(checkBoxFilter.concat(secondaryFilter))], [
    secondaryFilter,
  ]);

  useEffect(
    () => [
      setFilterTags(checkBoxFilter.concat([primaryFilter, secondaryFilter])),
    ],
    [checkBoxFilter]
  );

  //useEffect(() => [applyFilter()], [filterTags]);

  //update filter
  /*
  useEffect(
    () => [
      setProductData(
        defaultProductData.filter((product) => {
          return product.categories.includes(() => filterTags.forEach());
        })
      ),
    ],
    [filterTags]
  );
*/
  // HANDLE FILTER UPDATES

  const [filterButtonState, setFilterButtonState] = useState(['all']);

  const [sortButtonState, setSortButtonState] = useState(['popularity']);
  //const [sortState, setSortState] = useState([]);

  // TOGGLE STATES
  const [priceToggle, setPriceToggle] = useState([true]);
  const [alphaToggle, setAlphaToggle] = useState([true]);

  // FILTERING

  /*
  const toggleFilterProducts = (tag) => {
    const defaultFilteredData = defaultProducts.filter((product) =>
      product.categories.includes(tag)
    );
    setProducts(defaultFilteredData);
    setFilterButtonState(tag);
  };

  const addFilterProducts = (tag) => {
    const filteredData = products.filter((product) =>
      product.categories.includes(tag)
    );
    setProducts(filteredData);
  };
*/

  // SORTING

  const sortPrice = (tag) => {
    if (priceToggle == true) {
      productData.sort((a, b) => a.product_price - b.product_price);
    } else {
      productData.sort((a, b) => b.product_price - a.product_price);
    }
    setPriceToggle(!priceToggle);
    setSortButtonState(tag);
  };

  const sortAlpha = (tag) => {
    if (alphaToggle == true) {
      productData.sort(function (a, b) {
        a = a.product_name.toLowerCase();
        b = b.product_name.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
      });
    } else {
      productData.sort(function (a, b) {
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
          setPrimaryFilter={updateFilter}
          setSecondaryFilter={updateFilter}
          setFilterTags={updateFilter}
          filterButtonState={filterButtonState}
        />
        <BodyDiv>
          <CoverBar />
          <SortBy
            sortPrice={sortPrice}
            sortAlpha={sortAlpha}
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
