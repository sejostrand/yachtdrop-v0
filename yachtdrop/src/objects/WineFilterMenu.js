import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme.js';

const Wrapper = styled.div`
  padding: 5px;
`;

const Section = styled.div`
  padding: 5px;
`;

const SectionTitle = styled.div`
  font-size: 18px;
`;

const Button1 = styled.div`
  background-color: ${COLORS.purple};
  color: white;
  padding: 5px 20px;
  border-radius: 8px;
  font-family: 'Calibri';
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  height: auto;
  cursor: pointer;
  align-self: space-between;
  display: flex;
  margin: 4px;
  visibility: ${(props) =>
    props.primaryTag == props.parentTag ? 'visible' : 'hidden'};

  &:hover {
    opacity: 0.8;
  }
`;

export const WineFilterMenu = (props) => {
  return (
    <Wrapper>
      <Section>
        <Button1>Red</Button1>
        <Button1>White</Button1>
        <Button1>CHampagne</Button1>
      </Section>
      <Section></Section>
    </Wrapper>
  );
};
