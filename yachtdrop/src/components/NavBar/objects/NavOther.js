import React from 'react';
import styled from 'styled-components';

const StyledNavOther = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: end;
`;

const NavOther = ({ children }) => {
  return <StyledNavOther>{children}</StyledNavOther>;
};

export default NavOther;
