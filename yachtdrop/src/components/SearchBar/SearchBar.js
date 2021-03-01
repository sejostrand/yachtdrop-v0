import React from 'react';
import styled from 'styled-components';

// IMPORT OBJECTS
import LocationTag from './objects/LocationTag';
import SearchInput from './objects/SearchInput';
import CartLink from './objects/CartLink';

const StyledSearchBar = styled.div`
  margin-top: 52px;
  padding: 0px 25px;
  width: 100vw;
  background-color: white;
  display: flex;
  position: fixed;
  width: 100vw;
  z-index: 9;
  box-shadow: 0px 0px 7px;
  justify-content: space-between;
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <LocationTag />
      <SearchInput />
      <CartLink />
    </StyledSearchBar>
  );
};

export default SearchBar;
