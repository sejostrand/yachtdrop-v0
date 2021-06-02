import React from 'react';
import styled from 'styled-components';
import { COLORS, FONTS } from '../../../assets/theme/theme';

const StyledNavLink = styled.div`
  color: ${COLORS.color1};
  font-family: ${FONTS.primaryFont};
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  height: 2rem;
  border-radius: 8px;
  padding: 8px 40px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #f8694b;
    background-color: #f8faf7;
    color: black;
  }
`;

const NavLink = ({ children }) => {
  return <StyledNavLink>{children}</StyledNavLink>;
};

export default NavLink;
