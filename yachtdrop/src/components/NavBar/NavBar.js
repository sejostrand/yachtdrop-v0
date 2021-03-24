import React from 'react';
import styled from 'styled-components';

// IMPORT COMPONENTS
import NavMenu from './objects/NavMenu';
import NavLogo from './objects/NavLogo';
import NavAdmin from './objects/NavAdmin';
import MenuLink from './objects/MenuLink';
import LoginLink from './objects/LoginLink';
import ProfileLink from './objects/ProfileLink';
import SignUpLink from './objects/SignUpLink';
import YachtdropLogo from '../../objects/YachtdropLogo';

//import colors
import { COLORS } from '../../assets/theme/theme';



const NavBar = () => {

  const StyledNavBar = styled.nav`
    background-color: ${COLORS.color1};
    padding: 5px 25px;
    width: 100%;
    justify-content: space-between;
    top: 0;
    display: flex;
    position: fixed;
    z-index: 10;
  `;

  return (
    <StyledNavBar>
      <YachtdropLogo />
      <NavMenu>
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
