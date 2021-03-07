import React from 'react';
import styled from 'styled-components';

const StyledSortToggleButton = styled.div`
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

  &:hover {
    background-color: white;
    border: 3px solid #03b29a;
    color: #03b29a;
    padding: 0px 17px;
  }
`;

const SortToggleButton = ({ children }) => {
  return <StyledSortToggleButton>{children}</StyledSortToggleButton>;
};

export default SortToggleButton;
