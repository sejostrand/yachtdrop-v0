import React from 'react';
import styled from 'styled-components';

const RowTitle = styled.div`
  z-index: 3;
  color: white;
`;

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
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const RowWrapper = ({ children }) => {
  return <StyledRowWrapper>{children}</StyledRowWrapper>;
};

export default RowWrapper;
