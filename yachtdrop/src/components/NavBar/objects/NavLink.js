import React from 'react';
import styled from 'styled-components';

const StyledNavLink = styled.div`
  height: 2rem;
  align-self: center;
  justify-content: space-around;
  font-family: 'Calibri';
  text-align: center;
  padding: 8px 40px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 8px;

  &:hover {
    border-bottom: 3px solid #f8694b;
    background-color: white;
    color: black;
  }
`;

const NavLink = ({ children }) => {
  return <StyledNavLink>{children}</StyledNavLink>;
};

export default NavLink;
