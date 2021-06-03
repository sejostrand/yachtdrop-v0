import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

const HamburgerLine = styled.div`
  background-color: white;
  height: 5px;
  width: 36px;
  display: flex;
  margin-top: 5px;
  border-radius: 1.5px;
`;

const HamburgerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 3px 10px 18px 3px;
  width: fit-content;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const Hamburger = (props) => {
  return (
    <HamburgerContainer onClick={() => props.setOpen(!props.open)}>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerContainer>
  );
};

export default Hamburger;
