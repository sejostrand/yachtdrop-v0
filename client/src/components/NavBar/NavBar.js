import React, { useState } from 'react';
import styled from 'styled-components';

// IMPORT COMPONENTS
/* import NavLogo from './objects/NavLogo'; */
import MenuLink from './objects/MenuLink';
import LoginLink from './objects/LoginLink';
import ShopLink from './objects/ShopLink';
import ProfileLink from './objects/ProfileLink';
import SignUpLink from './objects/SignUpLink';
import YachtdropLogo from '@objects/YachtdropLogo';
import LogOutButton from '@objects/LogOutButton';
import useMediaQuery from '@assets/utils/useMediaQuery';
import Hamburger from './objects/Hamburger';

//import colors
import { COLORS } from '@assets/theme/theme';

const StyledNavBar = styled.nav`
  padding: 6px 20px;
  background-color: ${COLORS.green};
  width: 100%;
  justify-content: space-between;
  top: 0;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  z-index: 12;
  overflow: hidden;
  max-height: ${(props) => (props.open ? '500px' : '52px')};
  -moz-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  width: fit-content;

  @media (max-width: 1140px) {
    visibility: hidden;
    position: absolute;
  }
`;

const NavAdmin = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  flex-direction: ${(props) => props.direction};
`;

const NavBar = (props) => {
  const [navHeight, setNavHeight] = useState('none');
  const [scrollPos, setScrollPos] = useState();
  const matches = useMediaQuery('(min-width: 600px)');
  const [open, setOpen] = useState(false); //drop down menu

  return (
    <StyledNavBar open={open}>
      <YachtdropLogo open={open} setOpen={setOpen} />
      {window.location.href != 'http://localhost:3000/' && (
        <NavMenu>
          <MenuLink href='/shoppage'>All</MenuLink>
          <MenuLink href='/shoppage/products?category.category=wine&'>
            Wine
          </MenuLink>
          <MenuLink href='/shoppage/products?category.category=spirit&'>
            Spirits
          </MenuLink>
          <MenuLink href='/shoppage/products?category.category=beer&'>
            Beer
          </MenuLink>
          <MenuLink href='/shoppage/products?category.category=soft-drink&'>
            Soft Drinks
          </MenuLink>
        </NavMenu>
      )}
      <NavAdmin direction={!matches ? 'column' : 'row'}>
        {!matches && <Hamburger open={open} setOpen={setOpen} />}
        <ShopLink />
        <LoginLink />
        <ProfileLink />
        <SignUpLink />
        <LogOutButton />
      </NavAdmin>
    </StyledNavBar>
  );
};

export default NavBar;
