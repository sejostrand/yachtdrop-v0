import styled from 'styled-components';
import React from 'react';

const FilterBarWrapper = styled.div`
  justify-content: left;
  height: 100vh;
  width: 300px;
  background-color: white;
  padding: 20px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const FilterDiv = styled.div`
  padding: 12px;
  border-bottom: 2px solid lightgray;
`;

const FilterBar = () => {
  return (
    <FilterBarWrapper>
      <FilterDiv>Type</FilterDiv>
      <FilterDiv>Region</FilterDiv>
      <FilterDiv>Price</FilterDiv>
    </FilterBarWrapper>
  );
};

export default FilterBar;
