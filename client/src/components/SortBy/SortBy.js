import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/theme/theme';

const StyledSortBy = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: white;
  color: black;
  width: 100%;
  padding: 10px;
  align-items: center;
`;

const SortTitle = styled.div`
  display: flex;
  margin: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const SortButton = styled.div`
  background-color: ${(props) =>
    props.sortState == props.field ? COLORS.darkGreen : COLORS.green};
  color: white;
  padding: 5px 20px;

  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  margin: 5px 10px;
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
  const togglePrice = () => {
    if (props.sortState === '&_sort=price:ASC') {
      props.setSortState('&_sort=price:DSC');
    } else if (props.sortState === '&_sort=price:DSC') {
      props.setSortState('');
    } else {
      props.setSortState('&_sort=price:ASC');
    }
  };

  // const ToggleAlpha = () => {
  //   null;
  // };

  return (
    <StyledSortBy>
      <SortTitle>Sort</SortTitle>
      <SortButton color='#03b29a' field='' onCLick={() => togglePrice()}>
        Popularity
      </SortButton>
      <SortButton
        color='#03b29a'
        field='display'
        onCLick={() => null}
        sortState={props.sortState}
      >
        Alphabetical
      </SortButton>
      <SortButton color='#03b29a' field='price' onCLick={() => togglePrice()}>
        Price
      </SortButton>
    </StyledSortBy>
  );
};

export default SortBy;
