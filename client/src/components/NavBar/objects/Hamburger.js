import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';

const Top = styled.div`
  background-color: white;
  height: 5px;
  width: 36px;
  display: flex;
  margin-top: 5px;
  border-radius: 1.5px;
  transition: all 0.2s ease-in-out;
  transform: ${(props) => (!props.open ? 'none' : 'translateY(10px)')};
`;
const Mid = styled.div`
  background-color: white;
  height: 5px;
  width: 36px;
  display: flex;
  margin-top: 5px;
  border-radius: 1.5px;
  transition: all 0.2s ease-in-out;
`;

const Bot = styled.div`
  background-color: white;
  height: 5px;
  width: 36px;
  display: flex;
  margin-top: 5px;
  border-radius: 1.5px;
  transition: all 0.2s ease-in-out;
  transform: ${(props) => (!props.open ? 'none' : 'translateY(-10px)')};
`;

const HamburgerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 3px 10px 18px 3px;
  width: fit-content;
  cursor: pointer;
`;

const Hamburger = (props) => {
  return (
    <HamburgerContainer onClick={() => props.setOpen(!props.open)}>
      <Top open={props.open} />
      <Mid />
      <Bot open={props.open} />
    </HamburgerContainer>
  );
};

export default Hamburger;
