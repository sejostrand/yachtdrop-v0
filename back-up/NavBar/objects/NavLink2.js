import React from 'react';
import styled from 'styled-components';

const StyledNavLink2 = styled.div`
  border-bottom: 3px solid #f8694b;
  background-color: #f8faf7;
  color: black;

  height: 2rem;
  align-self: center;
  justify-content: space-around;
  font-family: 'Calibri';
  text-align: center;
  padding: 8px 40px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 8px;
`;

const NavLink2 = ({ children }) => {
  return <StyledNavLink2>{children}</StyledNavLink2>;
};

export default NavLink2;
