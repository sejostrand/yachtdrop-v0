import React, { useState } from 'react';
import styled from 'styled-components';

//objects
import SortButton from './objects/SortButton';
import SelectedSortButton from './objects/SelectedSortButton';

const StyledSortBy = styled.div`
  background-color: white;
  color: black;
  width: 100%;
  height: 60px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const SortTitle = styled.div`
  display: flex;
  padding: 0px 10px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;



const SortBy = () => {
  
  return (
    <StyledSortBy>
      <SortTitle>Sort By</SortTitle>
      <SelectedSortButton>Relavance</SelectedSortButton>
      <SortButton>Price</SortButton>
      <SortButton>Popularity</SortButton>
    </StyledSortBy>
  );
};

export default SortBy;
