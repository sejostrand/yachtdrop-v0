import styled from 'styled-components';
import React from 'react';
import BarButton from './objects/BarButton.js';
import CategoryItem from './objects/CategoryItem.js';

const FilterBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  position: relative;
  float: left;
  z-index: 3;
`;

const FilterGrid = styled.div`
  justify-content: left;
  height: 100%;
  width: 300px;
  background-color: #f8faf7;
  padding: 20px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
  border-right: 3px solid black;
`;

const FilterDiv = styled.div`
  padding: 12px;
  border-bottom: 2px solid lightgray;
`;

const FilterTitle = styled.div`
  padding: 16px;
  font-size: 30px;
`;

const BlackSection = styled.div`
  background-color: black;
  height: 19px;
`;

const CategoryList = styled.div`
  padding: 10px;
`;

const FilterBar = () => {
  return (
    <FilterBarWrapper>
      <BlackSection />
      <FilterGrid>
        <FilterTitle>Filter by</FilterTitle>
        <FilterDiv>Type</FilterDiv>
        <CategoryList>
          <CategoryItem>Red</CategoryItem>
          <CategoryItem>White</CategoryItem>
        </CategoryList>
        <FilterDiv>Region</FilterDiv>
        <CategoryList>
          <CategoryItem>France</CategoryItem>
          <CategoryItem>Italy</CategoryItem>
          <CategoryItem>Spain</CategoryItem>
          <CategoryItem>Chile</CategoryItem>
        </CategoryList>
        <FilterDiv>Price</FilterDiv>
      </FilterGrid>
    </FilterBarWrapper>
  );
};

export default FilterBar;
