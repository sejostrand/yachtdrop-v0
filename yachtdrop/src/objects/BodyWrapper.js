import React from 'react';
import styled from 'styled-components';

const StyledBodyWrapper = styled.body`
  padding-top: 95px;
  background-color: white;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
`;

const BodyWrapper = ({ children }) => {
  return <StyledBodyWrapper>{children}</StyledBodyWrapper>;
};

export default BodyWrapper;
