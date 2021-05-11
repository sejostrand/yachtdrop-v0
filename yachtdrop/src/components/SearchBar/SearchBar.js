import { useState, useEffect } from 'react';
import styled from 'styled-components';

// IMPORT OBJECTS
import LocationTag from './objects/LocationTag';
//import SearchInput from './objects/SearchInput';
import CartLink from './objects/CartLink';
import CartMenu from '@components/CartMenu/CartMenu';

const SearchInput = styled.input`
  padding: 5px;
  font-size: 20px;
  width: 500px;
  display: inline-flex;
  margin: 5px 5px;
  border: none;
  border-radius: 7px;
  justify-self: center;
  display: inline-block;
  width: 150vmin;

  :focus {
    border: none;
  }
`;

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

const SearchBar = (props) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <StyledSearchBar>
      <LocationTag />
      {!props.disabled && (
        <SearchInput
          type='text'
          placeholder='What can we help you find?'
          onChange={(char) => props.setSearchInput(char.target.value)}
        />
      )}
      <CartLink onCart={() => setShowCart(!showCart)} />
      {showCart && <CartMenu />}
    </StyledSearchBar>
  );
};

export default SearchBar;
