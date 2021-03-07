import React from 'react';
import styled from 'styled-components';

const StyledBodyWrapper = styled.body`
  padding-top: 97px;
  background-color: red;
  width: 100%;
  height: auto;
  display: flex;
`;

const BodyWrapper = ({ children }) => {
  return <StyledBodyWrapper>{children}</StyledBodyWrapper>;
};

export default BodyWrapper;
