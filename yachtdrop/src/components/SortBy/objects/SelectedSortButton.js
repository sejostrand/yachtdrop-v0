import React from 'react';
import styled from 'styled-components';

const StyledSortButton = styled.div`
  background-color: white;
  border: 3px solid #03b29a;
  color: #03b29a;
  padding: 1px 17px;
  border-radius: 8px;

  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0px 10px;
  height: auto;
  cursor: pointer;
  align-self: space-between;
  display: flex;
`;

const SortButton = ({ children }) => {
  return <StyledSortButton>{children}</StyledSortButton>;
};

export default SortButton;
