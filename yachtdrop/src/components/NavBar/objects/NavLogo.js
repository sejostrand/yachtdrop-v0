import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/img/yachtdrop-logo.png';

const NavLogo = () => {
  return (
    <LogoContainer>
      <StyledNavLogo src={logo} />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  align-self: center;
  padding: 5px 75px 5px 25px;
`;

const StyledNavLogo = styled.img`
  height: 20px;
`;

export default NavLogo;
