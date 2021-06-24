import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// IMPORT COMPONENTS
import SearchBar from '@components/SearchBar/SearchBar';
import FilterBar from '@components/FilterBar/FilterBar.js';
import MobileFilter from '@components/FilterBar/MobileFilter.js';
import CoverBar from '@components/CoverBar/CoverBar';
import BodyWrapper from '@objects/BodyWrapper.js';
import SortBy from '@components/SortBy/SortBy.js';
import ProductGrid from '@components/ProductGrid/ProductGrid';
import CartBar from '@components/CartBar/CartBar';
import useMediaQuery from '@assets/utils/useMediaQuery';
import AdvertGrid from './components/AdvertGrid'

const BodyDiv = styled.div`
  width: 100%;
  display: block;
  border-left: 3px solid black;
`;

// MAIN
const ShopLandingPage = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showCart, setShowCart] = useState(false);
  const matches = useMediaQuery('(min-width: 600px)');

  const getFavsString = async () => {
    const userFavs = await getFavs();
    let result = '';
    console.log(userFavs);
    userFavs.forEach((id) => (result = result.concat(`id=${id}&`)));
    console.log(result);
    return result;
  };

  const getFavs = async () => {
    const res = await axios.get('http://localhost:1337/users/me', {
      withCredentials: true,
    });
    const data = await res.data.favouriteProducts;
    return data;
  };

  const filterFavs = async () => {
    const query = await getFavsString();
    const url = await `http://localhost:1337/products?${query}`;
    await axios
      .get(url)
      .then((response) => setDisplayedProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (document.location.search === '?favourites') {
      filterFavs();
    } else {
      const params = new URLSearchParams(document.location.search);
      const url =
        searchInput === ''
          ? `http://localhost:1337/products?${params.toString()}`
          : `http://localhost:1337/products?_q=${searchInput}`;

      const getProductData = axios
        .get(url)
        .then((response) => setDisplayedProducts(response.data))
        .catch((error) => console.log(error));
    }
  }, [searchInput]);

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
        <BodyDiv>
          <AdvertGrid />
          <ProductGrid products={displayedProducts} />
        </BodyDiv>
      </BodyWrapper>
    </>
  );
};

export default ShopLandingPage;
