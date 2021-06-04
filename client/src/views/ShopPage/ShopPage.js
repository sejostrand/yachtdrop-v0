import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// IMPORT COMPONENTS
import SearchBar from '@components/SearchBar/SearchBar';
import FilterBar from '@components/FilterBar/FilterBar.js';
import MobileFilter from '@components/FilterBar/MobileFilter.js';
import CoverBar from '@components/CoverBar/CoverBar';
import BodyWrapper from '../../objects/BodyWrapper.js';
import SortBy from '@components/SortBy/SortBy.js';
import ProductGrid from '@components/ProductGrid/ProductGrid';
import CartBar from '@components/CartBar/CartBar';
import useMediaQuery from '@assets/utils/useMediaQuery';

const BodyDiv = styled.div`
  width: 100%;
  display: block;
  @media (max-width: 600px) {
    margin-left: 25px;
  }
`;

// MAIN
const ShopPage = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filterBar, setFilterBar] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const matches = useMediaQuery('(min-width: 600px)');

  class ParamsFilter {
    constructor(queryString) {
      this.category = queryString.match(/(?<=category.category=)(.*?)(?=\&)/g);
      this.subCategory = queryString.match(
        /(?<=sub_category.subCategory=)(.*?)(?=&)/g
      );
      this.categoryTags = queryString.match(
        /(?<=category_tags.categoryTag=)(.*?)(?=&)/g
      );
      this.sort = queryString.match(/(?<=_sort=)(.*?)(?=&)/g);
      this.search = queryString.match(/(?<=search\?_q=)(.*?)(?=\&)/g);
    }

    clear() {
      this.category = null;
      this.subCategory = null;
      this.categoryTags = null;
    }

    setCategory(value) {
      if (this.category == value) {
        this.category = null;
        this.subCategory = null;
        this.categoryTags = null;
      } else {
        this.category = value;
        this.subCategory = null;
        this.categoryTags = null;
      }
    }

    setSubCategory(value) {
      if (this.subCategory == value) {
        this.subCategory = null;
      } else {
        this.subCategory = value;
      }
    }

    setCategoryTag(value) {
      if (this.categoryTags == null) {
        this.categoryTags = [value];
      } else if (this.categoryTags.includes(value)) {
        this.categoryTags.splice(this.categoryTags.indexOf(value), 1);
      } else {
        this.categoryTags.push(value);
      }
    }

    setSort(value) {
      if (this.sort == `${value}:ASC&`) {
        this.sort = `${value}:DSC&`;
      } else if (this.sort == `${value}:DSC&`) {
        this.sort = null;
      } else {
        this.sort = `${value}:ASC&`;
      }
    }

    getQueryString() {
      let result = 'products?';
      if (this.category != null) {
        result = result.concat(`category.category=${this.category}&`);
      }
      if (this.subCategory != null) {
        result = result.concat(`sub_category.subCategory=${this.subCategory}&`);
      }
      if (this.categoryTags != null) {
        this.categoryTags.forEach(
          (tag) => (result = result.concat(`category_tags.categoryTag=${tag}&`))
        );
      }
      if (this.sort != null) {
        result = result.concat(`_sort=${this.sort}&`);
      }
      return result;
    }

    getString() {
      this.search == null ? this.getQueryString() : this.getSearchString();
    }
  }

  //GET ALL PRODUCTS
  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const url =
      searchInput === ''
        ? `http://localhost:1337/products?${params.toString()}`
        : `http://localhost:1337/products?_q=${searchInput}`;
    const getProductData = axios
      .get(url)
      .then((response) => setDisplayedProducts(response.data))
      .catch((error) => console.log(error));
  }, [searchInput]);

  const getFavs = async () => {
    const res = await axios.get('http://localhost:1337/users/me', {
      withCredentials: true,
    });
    const data = await res.data.favouriteProducts;
    return data;
  };

  const displayFavs = async () => {
    const data = await getFavs();
    const body = { id: await data };
    const url = 'http://localhost:1337/products';
    axios
      .get(url, body)
      .then((response) => setDisplayedProducts(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <SearchBar
        setSearchInput={setSearchInput}
        products={displayedProducts}
        setShowCart={setShowCart}
        showCart={showCart}
      />
      <CartBar showCart={showCart} setShowCart={setShowCart} />
      <BodyWrapper>
        {matches ? (
          <FilterBar filterBar={filterBar} setFilterBar={setFilterBar} />
        ) : (
          <MobileFilter filterBar={filterBar} setFilterBar={setFilterBar} />
        )}
        <BodyDiv>
          <CoverBar />
          <SortBy displayFavs={displayFavs} />
          <ProductGrid products={displayedProducts} />
        </BodyDiv>
      </BodyWrapper>
    </>
  );
};

export default ShopPage;
