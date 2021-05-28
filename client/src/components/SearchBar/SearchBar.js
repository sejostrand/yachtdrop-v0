import { useState, useEffect } from 'react';
import styled from 'styled-components';
import History from '@components/History';

// IMPORT OBJECTS
import LocationTag from './objects/LocationTag';
//import SearchInput from './objects/SearchInput';

const SearchInput = styled.input`
  padding: 5px;
  font-size: 20px;
  width: 100%;
  display: flex;
  margin: 5px 5px;
  border: none;
  border-radius: 7px;
  justify-self: center;

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

const CartLink = styled.a`
  background-color: #f8694b;
  color: white;
  font-family: 'Calibri';
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 8px 20px;
  margin: 5px;
  height: 2rem;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
`;

const SearchBar = (props) => {
  return (
    <StyledSearchBar>
      <LocationTag />
      {!props.disabled && (
        <SearchInput
          id='search'
          type='text'
          placeholder='What can we help you find?'
          onChange={(e) => props.setSearchInput(e.target.value)}
        />
      )}
      <CartLink onClick={() => props.setShowCart(!props.showCart)}>
        Cart
      </CartLink>
    </StyledSearchBar>
  );
};

export default SearchBar;
