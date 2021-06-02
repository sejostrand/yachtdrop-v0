import React, { useState } from 'react';
import styled from 'styled-components';

// IMPORT COMPONENTS
/* import NavLogo from './objects/NavLogo'; */
import NavAdmin from './objects/NavAdmin';
import MenuLink from './objects/MenuLink';
import LoginLink from './objects/LoginLink';
import ProfileLink from './objects/ProfileLink';
import SignUpLink from './objects/SignUpLink';
import YachtdropLogo from '@objects/YachtdropLogo';
import LogOutButton from '@objects/LogOutButton';

//import colors
import { COLORS } from '@assets/theme/theme';

const StyledNavBar = styled.nav`
  background: linear-gradient(white, none);
  padding: 5px 25px;
  width: 100%;
  justify-content: space-between;
  top: 0;
  display: flex;
  position: -webkit-sticky;
  position: absolute;
  z-index: 10;
  overflow: hidden;
  max-height: ${(props) => props.navHeight};
  transition: ease-in-out 0.2s;
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

const LandingNav = (props) => {
  const [navHeight, setNavHeight] = useState('none');
  const [scrollPos, setScrollPos] = useState();

  return (
    <StyledNavBar>
      <YachtdropLogo />
      <NavAdmin>
        <LoginLink />
        <ProfileLink />
        <SignUpLink />
        <LogOutButton />
      </NavAdmin>
    </StyledNavBar>
  );
};

export default LandingNav;
