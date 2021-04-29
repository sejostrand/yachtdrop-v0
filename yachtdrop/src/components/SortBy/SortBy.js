import React, { useState } from 'react';
import styled from 'styled-components';

//objects
//import SortButton from './objects/SortButton';
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

const SortButton = styled.div`
  border: ${(props) =>
    props.sortButtonState != props.field ? 'none' : '3px solid ' + props.color};
  background-color: ${(props) =>
    props.sortButtonState != props.field ? props.color : 'white'};
  color: ${(props) =>
    props.sortButtonState != props.field ? 'white' : props.color};
  padding: ${(props) =>
    props.sortButtonState != props.field ? '5px 20px' : '1px 17px'};

  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0px 10px;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
  align-self: space-between;
  display: flex;

  &:hover {
    opacity: 0.8;
  }
`;

const SortBy = (props) => {
  return (
    <StyledSortBy>
      <SortTitle>Sort By</SortTitle>
      <SortButton
        color='#03b29a'
        field='popularity'
        onClick={() => props.sortAlpha('popularity')}
        sortButtonState={props.sortButtonState}
      >
        Popularity
      </SortButton>
      <SortButton
        color='#03b29a'
        field='alphabetical'
        onClick={() => props.sortAlpha('alphabetical')}
        sortButtonState={props.sortButtonState}
      >
        Alphabetical
      </SortButton>
      <SortButton
        color='#03b29a'
        field='price'
        onClick={() => props.sortPrice('price')}
        sortButtonState={props.sortButtonState}
      >
        Price
      </SortButton>
    </StyledSortBy>
  );
};

export default SortBy;
