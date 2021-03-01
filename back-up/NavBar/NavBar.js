import React from 'react';
import styled from 'styled-components';

import ProfileIcon from './objects/ProfileIcon.js';
import CartIcon from './objects/CartIcon.js';
import NavLink from './objects/NavLink.js';
import NavLink2 from './objects/NavLink2.js';
import NavMenu from './objects/NavMenu.js';
import NavOther from './objects/NavOther.js';
import NavLogo from './objects/NavLogo.js';
import SearchBar from './objects/SearchBar.js';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: top;
  flex-wrap: wrap;
  background-color: #03b29a;
  min-height: 2.5rem;
`;

const NavWrap = styled.div`
  box-shadow: 0px 0px 5px;
  position: fixed;
  z-index: 3;
`;

const NavBar = () => {
  return (
    <>
      <NavWrap>
        <Nav>
          <NavMenu>
            <NavLogo />
            <NavLink>Wine</NavLink>
            <NavLink>Spirits</NavLink>
            <NavLink>Beer</NavLink>
            <NavLink>Soft Drinks</NavLink>
            <NavLink>More</NavLink>
          </NavMenu>
          <NavOther>
            <NavLink>Log on</NavLink>
            <NavLink2>Sign up</NavLink2>
          </NavOther>
        </Nav>
        <SearchBar />
      </NavWrap>
    </>
  );
};

export default NavBar;
