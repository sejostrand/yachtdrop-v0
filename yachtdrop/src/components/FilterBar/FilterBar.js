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

const CategoryButton = styled.div`
  color: white;
  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #03b29a;
  margin: 0px 10px;
  padding: 5px 20px;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
  align-self: space-between;
  display: flex;
  margin: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

const FilterBar = (props) => {
  return (
    <FilterBarWrapper>
      <BlackSection />
      <FilterGrid>
        <FilterTitle>Filter by</FilterTitle>
        <FilterDiv>
          <CategoryButton onClick={() => props.filtered('gin')}>
            Gin
          </CategoryButton>
          <CategoryButton onClick={() => props.filtered('spirits')}>
            Spirits
          </CategoryButton>
        </FilterDiv>
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
