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
import FilterToggle from '@objects/FilterToggle';

// MAIN
const ShopPage = (props) => {
  //const [q, setQ] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filterBar, setFilterBar] = useState(true);

  //GET ALL PRODUCTS
  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const url = `http://localhost:1337/products?${params.toString()}`;
    const getProductData = axios
      .get(url)
      .then((response) => setDisplayedProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    setDisplayedProducts(
      displayedProducts.filter((product) => {
        return product.display
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      })
    );
  }, [searchInput]);


    class TestClass {
      constructor(x, y) {
        this.x = x
        this.y = y
      }

      calculateSum() {
        return (this.x + this.y)
      }

      calculateMin() {
        return (this.x - this.y)
      }

      concatNumbs() {
        return `${this.x}${this.y}`
      }

      setNumbs() {
        if (this.x == 500) {
          this.x = null
        } else {
          return false
        }
      }
    }


  return (
    <>
      <SearchBar setSearchInput={setSearchInput} products={displayedProducts} />
      <BodyWrapper>
        <FilterBar filterBar={filterBar} />
        <FilterToggle filterBar={filterBar} setFilterBar={setFilterBar} />
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
