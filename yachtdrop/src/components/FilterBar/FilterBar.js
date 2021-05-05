import styled from 'styled-components';
import React, { useState } from 'react';
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
  display: flex;
  flex-flow: column nowrap;
`;

const CategoryButton = styled.div`
  border: ${(props) =>
    props.filterButtonState != props.cat ? 'none' : '3px solid ' + props.color};
  background-color: ${(props) =>
    props.filterButtonState != props.cat ? props.color : 'white'};
  color: ${(props) =>
    props.filterButtonState != props.cat ? 'white' : props.color};
  padding: ${(props) =>
    props.filterButtonState != props.cat ? '5px 20px' : '2px 17px'};

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

const FilterBar = (props) => {
  const [buttons, setButtons] = useState(false);

  return (
    <FilterBarWrapper>
      <BlackSection />
      <FilterGrid>
        <FilterTitle>Filter by</FilterTitle>
        <FilterDiv>
          <CategoryButton
            color='#03b29a'
            cat='all'
            onClick={() => props.removeFilterProducts('all')}
            filterButtonState={props.filterButtonState}
          >
            ALL
          </CategoryButton>
          <CategoryButton
            color='#874b96'
            cat='wine'
            onClick={() => props.toggleFilterProducts('wine')}
            filterButtonState={props.filterButtonState}
          >
            Wine
          </CategoryButton>
          <CategoryButton
            color='#23485A'
            cat='spirits'
            onClick={() => props.toggleFilterProducts('spirits')}
            filterButtonState={props.filterButtonState}
          >
            Spirits
          </CategoryButton>
          <CategoryButton
            color='#FD7156'
            cat='beer'
            onClick={() => props.toggleFilterProducts('beer')}
            filterButtonState={props.filterButtonState}
          >
            Beer
          </CategoryButton>
          <CategoryButton
            color='#DB607F'
            cat='soft-drinks'
            onClick={() => props.toggleFilterProducts('soft-drinks')}
            filterButtonState={props.filterButtonState}
          >
            Soft Drinks
          </CategoryButton>
        </FilterDiv>
        <FilterDiv>
          <CategoryButton
            color='#03b29a'
            onClick={() => props.fixThis('gin')}
          >
            Gin
          </CategoryButton>
          <CategoryButton
            color='#03b29a'
            onClick={() => {setButtons(!buttons) ; buttons && props.addFilterProducts('whiskey')}}
          >
            Whiskey
          </CategoryButton>
          <CategoryButton
            color='#03b29a'
            onClick={() => props.fixThis('whiskey')}
          >
            Whiskey
          </CategoryButton>
          <CategoryButton
            color='#03b29a'
            onClick={() => props.addFilterProducts('white')}
          >
            White
          </CategoryButton>
          <CategoryButton
            color='#03b29a'
            onClick={() => {props.toggleFilterProducts('wine') ; props.fixThis('red')}}
          >
            Red
          </CategoryButton>
        </FilterDiv>
        <CategoryList>
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
