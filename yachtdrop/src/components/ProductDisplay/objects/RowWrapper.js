import React from 'react';
import styled from 'styled-components';

const StyledRowWrapper = styled.div`
  margin-top: 30px;
  background-color: white;
  width: 99vw;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0px 0px 5px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

const RowWrapper = ({ children }) => {
  return <StyledRowWrapper>{children}</StyledRowWrapper>;
};

export default RowWrapper;
