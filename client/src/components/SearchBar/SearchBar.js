import { useState, useEffect } from 'react';
import styled from 'styled-components';
import History from '@components/History';

// IMPORT OBJECTS
import LocationTag from './objects/LocationTag';
//import SearchInput from './objects/SearchInput';
import CartLink from './objects/CartLink';
import CartBar from '@components/CartBar/CartBar';

const SearchInput = styled.input`
  padding: 5px;
  font-size: 20px;
  width: 100%;
  display: inline-flex;
  margin: 5px 5px;
  border: none;
  border-radius: 7px;
  justify-self: center;
  display: inline-block;

  :focus {
    border: none;
  }
`;

const StyledSearchBar = styled.div`
  padding: 0px 25px;
  width: 100vw;
  background-color: white;
  display: flex;
  position: sticky;
  top: 52px;
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
      <CartBar cartItems={props.products} showCart={showCart} />
    </StyledSearchBar>
  );
};

export default SearchBar;
