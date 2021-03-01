import React from 'react';
import styled from 'styled-components';

const StyledRowWrapper = styled.div`
  background-color: white;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0px 0px 10px;
  display: inline-block;
  overflow-x: auto;
  overflow-y: hidden;
`;

const RowWrapper = ({ children }) => {
  return <StyledRowWrapper>{children}</StyledRowWrapper>;
};

export default RowWrapper;
