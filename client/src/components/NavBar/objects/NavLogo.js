import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/img/yachtdrop-logo.png';

const StyledNavLogo = styled.div`
  display: flex;
  align-self: center;
`;

const Logo = styled.img`
  height: 20px;
  cursor: pointer;
`;

const NavLogo = () => {
  return (
    <StyledNavLogo>
      <Logo src={logo} />
    </StyledNavLogo>
  );
};

export default NavLogo;
