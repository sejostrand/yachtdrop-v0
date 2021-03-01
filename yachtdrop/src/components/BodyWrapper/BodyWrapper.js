import React from 'react';
import styled from 'styled-components';

const StyledBodyWrapper = styled.body`
  padding-top: 97px;
  z-index: 3;
  justify-content: space-between;
  background-color: lightgray;
  height: 800px;
  width: 100%;
`;

const BodyWrapper = ({ children }) => {
  return <StyledBodyWrapper>{children}</StyledBodyWrapper>;
};

export default BodyWrapper;
