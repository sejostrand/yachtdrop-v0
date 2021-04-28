import { useState, useEffect } from 'react';
import styled from 'styled-components';

// IMPORT OBJECTS
import LocationTag from './objects/LocationTag';
import SearchInput from './objects/SearchInput';
import CartLink from './objects/CartLink';
import CartMenu from '@components/CartMenu/CartMenu';

const StyledSearchBar = styled.div`
  margin-top: 52px;
  padding: 0px 25px;
  width: 100vw;
  background-color: white;
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 9;
  box-shadow: 0px 0px 7px;
  justify-content: space-between;
`;

const SearchBar = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <StyledSearchBar>
      <LocationTag />
      <SearchInput />
      <CartLink onCart={() => setShowCart(!showCart)} />
      {showCart && <CartMenu />}
    </StyledSearchBar>
  );
};

export default SearchBar;
