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
  width: 100%;
  z-index: 9;
  box-shadow: 0px 0px 7px;
  justify-content: space-between;
`;

const Button = styled.button`
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

const SearchBar = ({ onCart }) => {
  return (
    <StyledSearchBar>
      <LocationTag />
      <SearchInput />
      <Button onClick={onCart}>Cart</Button>
    </StyledSearchBar>
  );
};

export default SearchBar;
