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
import LogOutButton from '@objects/LogOutButton';

//import colors
import { COLORS } from '../../assets/theme/theme';

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

const NavBar = (props) => {
  const productFilter = props.productFilter;

  return (
    <StyledNavBar>
      <YachtdropLogo />
      <NavMenu>
        <MenuLink href='/shoppage'>All</MenuLink>
        <MenuLink href='/shoppage'>Wine</MenuLink>
        <MenuLink href='/shoppage'>Spirits</MenuLink>
        <MenuLink href='/shoppage'>Beer</MenuLink>
        <MenuLink href='/shoppage'>Other</MenuLink>
      </NavMenu>
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
