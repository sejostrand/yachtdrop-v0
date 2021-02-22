import React from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  background-color: white;
  position: inline;
  justify-content: center;
  align-items: left;
`;

const LocationTag = styled.span`
  align-self: center;
  padding: 2px 100px 2px 63px;
  display: inline-block;
  letter-spacing: 8px;
  font-size: 20px;
  font-weight: bold;
`;

const SearchForm = styled.span`
  justify-self: center;
  display: inline-block;
`;

const Search = styled.input`
  padding: 5px;
  font-size: 20px;
  width: 400px;
  display: inline-flex;
  margin: 5px 5px;

  border: 1px solid gray;
  border-radius: 7px;
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <LocationTag>MALLORCA</LocationTag>
      <SearchForm>
        <Search type='text' placeholder='What can we help you find?' />
      </SearchForm>
    </StyledSearchBar>
  );
};

export default SearchBar;
