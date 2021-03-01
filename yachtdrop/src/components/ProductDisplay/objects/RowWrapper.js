import React from 'react';
import styled from 'styled-components';

const StyledRowWrapper = styled.div`
  margin-top: 30px;
  background-color: white;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0px 0px 5px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE and Edge */
  .example {
    -ms-overflow-style: none;
  }
`;

const RowWrapper = ({ children }) => {
  return <StyledRowWrapper>{children}</StyledRowWrapper>;
};

export default RowWrapper;
