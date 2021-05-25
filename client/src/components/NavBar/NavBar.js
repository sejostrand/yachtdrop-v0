import React, { useState } from 'react';
import styled from 'styled-components';

// IMPORT COMPONENTS
/* import NavLogo from './objects/NavLogo'; */
import NavAdmin from './objects/NavAdmin';
import MenuLink from './objects/MenuLink';
import LoginLink from './objects/LoginLink';
import ProfileLink from './objects/ProfileLink';
import SignUpLink from './objects/SignUpLink';
import YachtdropLogo from '../../objects/YachtdropLogo';
import LogOutButton from '@objects/LogOutButton';

//import colors
import { COLORS } from '@assets/theme/theme';

const StyledNavBar = styled.nav`
  background-color: ${COLORS.green};
  padding: 5px 25px;
  width: 100%;
  justify-content: space-between;
  top: 0;
  display: flex;
  position: sticky;
  z-index: 10;
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;

  @media (max-width: 1140px) {
    visibility: hidden;
    position: absolute;
  }
`;

const NavBar = (props) => {
  return (
    <StyledNavBar>
      <YachtdropLogo />
      {window.location.href != 'http://localhost:3000/' && (
        <NavMenu>
          <MenuLink href='/shoppage'>All</MenuLink>
          <MenuLink href='shoppage/products?category.category=wine'>
            Wine
          </MenuLink>
          <MenuLink href='shoppage/products?category.category=spirit'>
            Spirits
          </MenuLink>
          <MenuLink href='shoppage/products?category.category=beer'>
            Beer
          </MenuLink>
          <MenuLink href='shoppage/products?category.category=other'>
            Other
          </MenuLink>
        </NavMenu>
      )}
      <NavAdmin>
        <LoginLink />
        <ProfileLink />
        <SignUpLink />
        <LogOutButton />
      </NavAdmin>
    </StyledNavBar>
  );
};

export default NavBar;
