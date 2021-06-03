import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import SignUpLink from '@components/NavBar/objects/SignUpLink';
import ProfileLink from '@components/NavBar/objects/ProfileLink';
import LogOutButton from '@objects/LogOutButton';

const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 12;
`;

const Hamburger = styled.div`
  background-color: white;
  height: 5px;
  width: 36px;
  display: flex;
  margin-top: 5px;
`;

const HamburgerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 4px;
  cursor: pointer;
  margin-left: 80px;
`;

const DDM = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  padding: 5px 25px;
  width: 100%;
  height: auto;
  background-color: ${COLORS.green};
  top: 52px;
  right: 0;
  transition: all 0.3s ease;
`;

const LoginLink = styled.a`
  color: black;
  background-color: white;
  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 3px solid ${COLORS.orange};

  height: 2rem;
  border-radius: 8px;
  padding: 8px 20px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f8faf7;
    color: black;
  }
`;

const DropDownMenu = (props) => {
  return (
    <DropDownWrapper>
      <HamburgerContainer onClick={() => props.setOpen(!props.open)}>
        <Hamburger />
        <Hamburger />
        <Hamburger />
      </HamburgerContainer>
      {props.open && (
        <DDM>
          <LoginLink href='/login'>Login</LoginLink>
          <SignUpLink />
          <ProfileLink />
          <LogOutButton />
        </DDM>
      )}
    </DropDownWrapper>
  );
};

export default DropDownMenu;
