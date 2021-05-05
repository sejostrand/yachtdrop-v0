import styled from 'styled-components';
import React, { useState } from 'react';
import BarButton from './objects/BarButton.js';
import CategoryItem from './objects/CategoryItem.js';
import { COLORS } from '@assets/theme/theme.js';

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
  display: flex;
  flex-flow: column nowrap;
`;

const PrimaryCategoryButton = styled.div`
  background-color: ${(props) =>
    props.primaryTag != props.tag ? COLORS.green : COLORS.darkGreen};
  color: white;
  padding: 5px 20px;

  border-radius: 8px;
  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  height: auto;
  cursor: pointer;
  align-self: space-between;
  display: flex;
  margin: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

const SecondaryCategoryButton = styled.div`
  background-color: ${(props) =>
    props.secondaryTag != props.tag ? COLORS.purple : COLORS.orange};
  color: white;
  padding: 5px 20px;

  border-radius: 8px;
  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  height: auto;
  cursor: pointer;
  align-self: space-between;
  display: flex;
  margin: 4px;
  visibility: ${(props) =>
    props.primaryTag == props.parentTag ? 'visible' : 'hidden'};

  &:hover {
    opacity: 0.8;
  }
`;

const FilterBar = (props) => {
  const [buttons, setButtons] = useState(false);

  return (
    <FilterBarWrapper>
      <BlackSection />
      <FilterGrid>
        <FilterTitle>Filter by</FilterTitle>
        <FilterDiv>
          <PrimaryCategoryButton
            primaryTag={props.productFilter.primaryTag}
            onClick={() => props.clearFilter()}
          >
            Clear filters
          </PrimaryCategoryButton>
          <PrimaryCategoryButton
            tag='wine'
            primaryTag={props.productFilter.primaryTag}
            onClick={() => props.primaryFilter('wine')}
          >
            Wine
          </PrimaryCategoryButton>
          <PrimaryCategoryButton
            tag='spirits'
            primaryTag={props.productFilter.primaryTag}
            cond={props.productFilter.setPrimaryTag != props.tag}
            onClick={() => props.primaryFilter('spirits')}
          >
            Spirits
          </PrimaryCategoryButton>
          <PrimaryCategoryButton
            tag='beer'
            primaryTag={props.productFilter.primaryTag}
            onClick={() => props.primaryFilter('beer')}
          >
            Beer
          </PrimaryCategoryButton>
          <PrimaryCategoryButton
            tag='soft-drinks'
            primaryTag={props.productFilter.primaryTag}
            onClick={() => props.primaryFilter('soft-drinks')}
          >
            Soft Drinks
          </PrimaryCategoryButton>
          <PrimaryCategoryButton
            tag='other'
            primaryTag={props.productFilter.primaryTag}
            onClick={() => props.primaryFilter('other')}
          >
            Other
          </PrimaryCategoryButton>
        </FilterDiv>
        <FilterDiv>
          <SecondaryCategoryButton
            parentTag='spirits'
            tag='gin'
            secondaryTag={props.productFilter.secondaryTag}
            primaryTag={props.productFilter.primaryTag}
            onClick={() => props.secondaryFilter('gin')}
          >
            {' '}
            Gin
          </SecondaryCategoryButton>
          <SecondaryCategoryButton
            parentTag='spirits'
            tag='whiskey'
            secondaryTag={props.productFilter.secondaryTag}
            primaryTag={props.productFilter.primaryTag}
            onClick={() => props.secondaryFilter('whiskey')}
          >
            Whiskey
          </SecondaryCategoryButton>
          <SecondaryCategoryButton
            parentTag='wine'
            tag='white'
            secondaryTag={props.productFilter.secondaryTag}
            primaryTag={props.productFilter.primaryTag}
            onClick={() => props.secondaryFilter('white')}
          >
            White
          </SecondaryCategoryButton>
          <SecondaryCategoryButton
            parentTag='wine'
            tag='red'
            secondaryTag={props.productFilter.secondaryTag}
            primaryTag={props.productFilter.primaryTag}
            onClick={() => props.secondaryFilter('red')}
          >
            Red
          </SecondaryCategoryButton>
        </FilterDiv>
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
