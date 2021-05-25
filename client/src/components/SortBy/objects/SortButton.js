import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSortButton = styled.div`
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

  &:hover {
    opacity: 0.8;
  }
`;

const SortButton = (props) => {
  const toggleSort = (field) => {
    props.sortState == field
      ? props.setSortState('')
      : props.setSortState(`&_sort=${field}:ASC`);
  };

  return (
    <StyledSortButton onClick={(props) => toggleSort(props.field)}>
      {props.children}
    </StyledSortButton>
  );
};

export default SortButton;
