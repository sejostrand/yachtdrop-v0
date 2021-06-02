import React, { useState } from 'react'
import styled from 'styled-components'

import LoginLink from '../NavBar/objects/LoginLink'
import SignUpLink from '../NavBar/objects/SignUpLink'
import ProfileLink from '../NavBar/objects/ProfileLink'
import LogOutButton from '@objects/LogOutButton';

const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hamburger = styled.div`
  height: 45px;
  margin: 10px;
  display: -ms-grid;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  z-index: 120;
`;

const Hamburger_div = styled.div`
  background-color: rgb(61, 61, 61);
  position: relative;
  width: 40px;
  height: 5px;
  margin-top: 7px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
`;

const Menu = styled.div`
  width: 100%;
  background-color: #02173F;
  margin: 0;
  display: -ms-grid;
  display: grid;
  grid-template-rows: 1fr repeat(4, 0.5fr);
  grid-row-gap: 25px;
  padding: 0;
  list-style: none;
  clear: both;
  width: auto;
  text-align: center;
  height: 0px;
  overflow: hidden;
  transition: height .4s ease;
  z-index: 120;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
`;

const DDM = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: auto;
  background-color: darkblue;
  position: fixed;
  margin-top: 15%;
  right: 5%;
  transition: all 0.3s ease;

`;


const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownWrapper>
        <Hamburger onClick={() => setOpen(!open)}>
          <Hamburger_div />
          <Hamburger_div />
          <Hamburger_div />
        </Hamburger>
      {open && (
      <DDM>
        <LoginLink />
        <SignUpLink />
        <ProfileLink />
        <LogOutButton />
      </DDM>)}
    </DropDownWrapper>
  )
}

export default DropDown

