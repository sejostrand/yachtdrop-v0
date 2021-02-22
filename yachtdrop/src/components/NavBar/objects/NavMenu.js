import React from 'react';
import styled from 'styled-components';

const StyledNavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 5px 5px;
  position: relative;
  }
`;

const NavMenu = ({ children }) => {
  return <StyledNavMenu>{children}</StyledNavMenu>;
};

export default NavMenu;
