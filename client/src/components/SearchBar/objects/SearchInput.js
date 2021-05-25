import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSearchInput = styled.input`
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

const SearchInput = () => {
  return (
    <StyledSearchInput type='text' 
    placeholder='What can we help you find?' 
    onChange={ e => setSearch(e.target.value)} />
  );
};

export default SearchInput;
