import React from 'react';
import styled from 'styled-components';
import CartIcon from './CartIcon';

const StyledSearchBar = styled.div`
  background-color: white;
  position: inline;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const LocationTag = styled.div`
  align-self: center;
  margin: 0px 94px 0px 53px;
  padding: 0px 5px 0px 13px;
  display: inline-block;
  letter-spacing: 8px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  border-bottom: 4px solid #f8694b;
  cursor: pointer;
`;

const SearchForm = styled.span`
  justify-self: center;
  display: inline-block;
  width: 150vmin;
`;

const Search = styled.input`
  padding: 5px;
  font-size: 20px;
  width: 500px;
  display: inline-flex;
  margin: 5px 5px;
  border: none;
  border-radius: 7px;
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <LocationTag>MALLORCA</LocationTag>
      <SearchForm>
        <Search type='text' placeholder='What can we help you find?' />
      </SearchForm>
      <CartIcon />
    </StyledSearchBar>
  );
};

export default SearchBar;
