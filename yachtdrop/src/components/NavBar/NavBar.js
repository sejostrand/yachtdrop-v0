import React, { useState } from 'react';
import styled from 'styled-components';

// IMPORT COMPONENTS
import NavMenu from './objects/NavMenu';
/* import NavLogo from './objects/NavLogo'; */
import NavAdmin from './objects/NavAdmin';
import MenuLink from './objects/MenuLink';
import LoginLink from './objects/LoginLink';
import ProfileLink from './objects/ProfileLink';
import SignUpLink from './objects/SignUpLink';
import YachtdropLogo from '../../objects/YachtdropLogo';

//import colors
import { COLORS } from '../../assets/theme/theme';

const StyledNavBar = styled.nav`
  background-color: ${COLORS.green};
  padding: 5px 25px;
  width: 100%;
  justify-content: space-between;
  top: 0;
  display: flex;
  position: fixed;
  z-index: 10;
`;

const NavBar = ({ filteredProducts }) => {
  return (
    <StyledNavBar>
      <YachtdropLogo />
      <NavMenu>
        <MenuLink>All</MenuLink>
        <MenuLink>Wine</MenuLink>
        <MenuLink>Spirits</MenuLink>
        <MenuLink>Beer</MenuLink>
        <MenuLink>Other</MenuLink>
      </NavMenu>
      <NavAdmin>
        <LoginLink />
        <ProfileLink />
        <SignUpLink />
      </NavAdmin>
    </StyledNavBar>
  );
};

export default NavBar;
