import React from 'react';
import styled from 'styled-components';

const StyledNavMenu = styled.div`
  display: flex;
  align-content: center;
`;

const NavMenu = ({ children }) => {
  return <StyledNavMenu>{children}</StyledNavMenu>;
};

export default NavMenu;
