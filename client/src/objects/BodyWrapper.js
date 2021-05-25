import React from 'react';
import styled from 'styled-components';

const StyledBodyWrapper = styled.body`
  background-color: white;
  width: 100%;
  height: auto;
  min-height: 85vh;
  display: flex;
  flex-flow: row nowrap;
`;

const BodyWrapper = ({ children }) => {
  return <StyledBodyWrapper>{children}</StyledBodyWrapper>;
};

export default BodyWrapper;
