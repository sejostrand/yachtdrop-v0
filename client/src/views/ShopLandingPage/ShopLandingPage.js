import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useCurrentUser } from '@assets/utils/CurrentUser';
import { COLORS } from '@assets/theme/theme';

// IMPORT COMPONENTS
import SearchBar from '@components/SearchBar/SearchBar';
import CartBar from '@components/CartBar/CartBar';
import useMediaQuery from '@assets/utils/useMediaQuery';
import ProductSection from './components/ProductSection';
import TileMenu from './components/TileMenu';

const BodyDiv = styled.div`
  background-color: ${COLORS.white};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0 30px;
`;

const Caption = styled.div`
  background-color: black;
  color: white;
  font-size: 10px;
  text-align: center;
  padding-top: 2px;
  letter-spacing: 2px;
  height: 19px;
  width: 100%;
`;

// MAIN
const ShopLandingPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [showCart, setShowCart] = useState(false);
  const matches = useMediaQuery('(min-width: 600px)');
  const user = useCurrentUser();

  return (
    <>
      <SearchBar
        setSearchInput={setSearchInput}
        setShowCart={setShowCart}
        showCart={showCart}
      />
      <CartBar showCart={showCart} setShowCart={setShowCart} />
      <Caption>
        {user.isAuthenticated
          ? `Welcome ${user.firstName}, happy sailing!`
          : 'Sign up or log in and save your favourite products!'}
      </Caption>
      <BodyDiv>
        <TileMenu />
        <ProductSection label='Our Favourite Products' params='' />
        <ProductSection label='Red Wine' params='category.category=wine' />
        <ProductSection label='Spirits' params='category.category=spirit' />
        <ProductSection
          label='Soft Drinks'
          params='category.category=soft-drink'
        />
      </BodyDiv>
    </>
  );
};

export default ShopLandingPage;
