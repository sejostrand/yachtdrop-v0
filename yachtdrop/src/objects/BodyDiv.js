import React from 'react';
import styled from 'styled-components';

const StyledBodyDiv = styled.div`
  width: 80%;
`;

const BodyDiv = ({ children }) => {
  return <StyledBodyDiv>{children}</StyledBodyDiv>;
};

export default BodyDiv;
